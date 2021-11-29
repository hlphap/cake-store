const express = require('express');

const userRoute = require('./user.route');
const homeRoute = require('./home.route');
const menuRoute = require('./menu.route');
const adminRoute = require('./admin.route');
const authRoute = require('./auth.route');
const aboutUsRoute = require('./about-us.route');

const router = express.Router();

router.use('/users', userRoute);
router.use('/', homeRoute);
router.use('/menu', menuRoute);
router.use('/auth', authRoute);
router.use('/about-us', aboutUsRoute);

// Admin
router.use('/admin', adminRoute);

module.exports = router;
