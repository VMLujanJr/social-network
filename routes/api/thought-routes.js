const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    postNewThought
} = require('../../controllers/thought-controller.js');

// **************
// THOUGHT ROUTES
// **************

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts) // getAllThoughts
    .post(postNewThought) // postNewThought // look at instructions...

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById) // getThoughtById
    .put() // putThoughtById
    .delete() // deleteThoughtById

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post() // postNewReaction
    .delete() // deleteExistingReaction

module.exports = router;