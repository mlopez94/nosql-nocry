const router = require("express").Router();

const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    addAFriend,
    removeAFriend
} = require('../../controllers/user-controller');


router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
    
router
    .route('/:userId/friends/:friendId')
    .post(addAFriend)
    .delete(removeAFriend)





module.exports = router;