const express = require('express');
const { passport } = require('../plugins/passport');
const { authController } = require('../controllers');

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
module.exports = router;
