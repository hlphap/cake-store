const express = require('express');
const { menuController } = require('../controllers');

const router = express.Router();

router.get('/', menuController.index);

module.exports = router;
