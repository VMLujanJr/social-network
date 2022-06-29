const router = require('express').Router();
const {
    // import controller methods here
} = require('../../controllers/user-controller.js');

// ***********
// USER ROUTES
// ***********

// /api/users
router
    .route('/')
    .get() // getAllUsers
    .post() // postNewUser

// /api/users/:id
router
    .route('/:id')
    .get() // getUserById
    .put() // putUserById
    .delete() // deleteUserById

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post() // postNewFriend
    .delete() // deleteExistingFriend

// REMOVE USER'S ASSOCIATED THOUGHTS WHEN DELETED (BONUS)
module.exports = router;