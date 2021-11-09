const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

router.get('/signin', authController.signIn);

module.exports = router;
