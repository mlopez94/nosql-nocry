const router = require('express').Router();

// set routes
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// adding to created thoughts
router.use('/thoughts', thoughtRoutes);

// adding to created users
router.use('/users', userRoutes);

// export module
module.exports = router;