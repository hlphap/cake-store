const express = require('express');
const { menuController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', checkUserLogged, menuController.index);
router.get('/:cakeID', checkUserLogged, menuController.showCake);

module.exports = router;
