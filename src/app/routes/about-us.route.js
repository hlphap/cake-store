const express = require('express');
const { aboutUsController } = require('../controllers');

const router = express.Router();

router.get('/', aboutUsController.index);

module.exports = router;
