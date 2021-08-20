const { Schema, model, Types } = require("mongoose");

const dateFormat = require('../utils/dateFormat');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new.Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280

        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // thank you module
            get: createdAtVal => dateFormat(createdAtVal)

        }


    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // mongoose requires minLength and maxLength validators for strings
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // from the module ...thank you
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        toJson: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// a virtual that retrieves the length of the thought's 'reactions' array field
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

// export Thought model
module.exports = Thought;

