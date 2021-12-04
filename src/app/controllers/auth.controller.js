const httpStatus = require('http-status');
const CatchAsync = require('../../utils/catch-async');
const { userService, tokenService } = require('../services');

const login = CatchAsync(async (req, res) => {
    const { user } = req;
    const token = await tokenService.generateToken(user);
    res.cookie('token', `Bearer ${token}`);
    const userID = user._id.toString();
    res.cookie('userID', userID);
    res.status(httpStatus.OK).send({ user });
});

const register = CatchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    const token = await tokenService.generateToken(user);
    res.cookie('token', `Bearer ${token}`);
    res.status(httpStatus.CREATED).send(user);
});

const logout = CatchAsync(async (req, res) => {
    console.log('object');
    res.clearCookie('token');
    res.status(httpStatus.OK).send();
});

module.exports = {
    login,
    register,
    logout,
};
