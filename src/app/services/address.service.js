const { Province, District, Ward } = require('../models');

const getProvinces = async () => Province.find({});

const getDistrictsByProvince = async (provinceID) => District.find({ province: provinceID });

const getWardsByDistrict = async (districtID) => Ward.find({ district: districtID });

module.exports = {
    getProvinces,
    getDistrictsByProvince,
    getWardsByDistrict,
};
