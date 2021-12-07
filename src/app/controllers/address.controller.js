const httpStatus = require('http-status');

const catchAsync = require('../../utils/catch-async');
const { addressService } = require('../services');

const getProvinces = catchAsync(async (req, res) => {
    const provinces = await addressService.getProvinces();
    return res.status(httpStatus.OK).send(provinces);
});

const getDistrictsByProvince = catchAsync(async (req, res) => {
    const districts = await addressService.getDistrictsByProvince(req.params.provinceID);
    return res.status(httpStatus.OK).send(districts);
});

const getWardsByDistrict = catchAsync(async (req, res) => {
    console.log(req.params.districtID);
    const wards = await addressService.getWardsByDistrict(req.params.districtID);
    return res.status(httpStatus.OK).send(wards);
});

module.exports = {
    getProvinces,
    getDistrictsByProvince,
    getWardsByDistrict,
};
