const express = require('express');

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const homeRoute = require('./home.route');
const menuRoute = require('./menu.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/', homeRoute);
router.use('/menu', menuRoute);

module.exports = router;
