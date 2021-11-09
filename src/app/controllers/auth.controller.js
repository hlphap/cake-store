const CatchAsync = require('../../utils/catch-async');

const signIn = CatchAsync(async (req, res) => {
    res.render('auth/signin', {
        title: '',
        styles: ['header', 'footer'],
    });
});

module.exports = {
    signIn,
};
