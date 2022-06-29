const router = require('express').Router();
const {
    // import thought methods here
} = require('../../controllers/thought-controller.js');

// **************
// THOUGHT ROUTES
// **************

// /api/thoughts
router
    .route('/')
    .get() // getAllThoughts
    .post() // postNewThought // look at instructions...

// /api/thoughts/:id
router
    .route('/:id')
    .get() // getThoughtById
    .put() // putThoughtById
    .delete() // deleteThoughtById

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post() // postNewReaction
    .delete() // deleteExistingReaction

module.exports = router;