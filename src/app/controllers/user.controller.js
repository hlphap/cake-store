const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-async');
const userService = require('../services/user.service');

const getUsers = catchAsync(async (req, res) => {
    const users = await userService.getUsers();
    res.status(httpStatus.OK).send({ users });
});

const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ user });
});

const updateUser = catchAsync(async (req, res) => {
    const newUser = await userService.updateUser(req.params.userID, req.body);
    res.status(httpStatus.OK).send({ newUser });
});

const deleteUser = catchAsync(async (req, res) => {
    const deletedUser = await userService.deleteUser(req.params.userID);
    res.status(httpStatus.OK).send({ deletedUser });
});

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};
