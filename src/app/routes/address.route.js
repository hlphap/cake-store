const express = require('express');
const { addressController } = require('../controllers');

const router = express.Router();

router.get('/provinces', addressController.getProvinces);
router.get('/provinces/:provinceID/districts', addressController.getDistrictsByProvince);
router.get('/districts/:districtID/wards', addressController.getWardsByDistrict);

module.exports = router;
