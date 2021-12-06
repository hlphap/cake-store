const express = require('express');

const userRoute = require('./user.route');
const homeRoute = require('./home.route');
const menuRoute = require('./menu.route');
const adminRoute = require('./admin.route');
const authRoute = require('./auth.route');
const aboutUsRoute = require('./about-us.route');
const contactRoute = require('./contact.route');
const addressRoute = require('./address.route');
const blogRoute = require('./blog.route');
const cakeRoute = require('./cake.route');
const typeCakeRoute = require('./type-cake.route');

const router = express.Router();

router.use('/users', userRoute);
router.use('/', homeRoute);
router.use('/menu', menuRoute);
router.use('/auth', authRoute);
router.use('/about-us', aboutUsRoute);
router.use('/contact', contactRoute);
router.use('/address', addressRoute);
router.use('/auth', authRoute);
router.use('/blog', blogRoute);

// Admin
router.use('/admin', adminRoute);

// API
router.use('/api/cakes', cakeRoute);
router.use('/api/type-cakes', typeCakeRoute);

module.exports = router;
