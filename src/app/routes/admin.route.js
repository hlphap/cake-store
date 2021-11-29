const express = require('express');
const { adminController } = require('../controllers');


const router = express.Router();

router.get('/', adminController.index);
router.get('/user/change-password',adminController.changePassword )
router.get('/service/manager-cake',adminController.managerCake )

module.exports = router;
