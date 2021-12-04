const { passport } = require('../app/plugins/passport');

const checkUserLogged = (req, res, next) => {
    req.headers.authorization = req.cookies.token;
    passport.authenticate('jwt', (err, user, info) => {
        req.user = user;
        next();
    })(req, res, next);
};

module.exports = checkUserLogged;
