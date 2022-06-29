const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.status(400).json(err));
    },
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought found.' });
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(400).json(err));
    },
    postNewThought({ params, body }, res) {
        console.log(params, body)
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user found.' });
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = thoughtController;