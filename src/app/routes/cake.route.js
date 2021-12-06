const express = require('express');
const { cakeController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', cakeController.getCakes);
router.post('/', cakeController.createCake);

module.exports = router;
