const CatchAsync = require('../../utils/catch-async');

const signIn = CatchAsync(async (req, res) => {
    res.json(req.body)
});

const signUp = CatchAsync(async (req, res) => {
    res.json(req.body)
});

module.exports = {
    signIn,
    signUp,
};
