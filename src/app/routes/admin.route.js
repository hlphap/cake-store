const express = require('express');
const { adminController } = require('../controllers');
const checkUserLogged = require('../../middlewares/check-user-logged');

const router = express.Router();

router.get('/', adminController.index);
router.get('/user/change-password', adminController.changePassword);
router.get('/user/info', checkUserLogged, adminController.info);

module.exports = router;
