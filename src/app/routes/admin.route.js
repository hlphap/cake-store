const express = require('express');
const { adminController } = require('../controllers');

const router = express.Router();

router.get('/', adminController.index);
router.get('/user/change-password', adminController.changePassword);
router.get('/user/info', adminController.info);

module.exports = router;
