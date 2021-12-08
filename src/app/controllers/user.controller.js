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

const deleteUser = catchAsync(async (req, res) => {
    const deletedUser = await userService.deleteUser(req.params.userID);
    res.status(httpStatus.OK).send({ deletedUser });
});

const profile = catchAsync(async (req, res) => {
    // Select view to render
    res.render('user/profile', {
        styles: ['header', 'footer', 'profile', 'layout-user'], // Required Stylesheet name from public
        scripts: ['profile', 'header'], // Required Script name from public
    });
});

const product = catchAsync(async (req, res) => {
    // Select view to render
    res.render('user/product', {
        styles: ['header', 'footer', 'product'], // Required Stylesheet name from public
        scripts: ['product', 'header'], // Required Script name from public
    });
});

const addToCart = catchAsync(async (req, res) => {
    res.json(req.body);
});

const updateUser = catchAsync(async (req, res) => {
    const user = await userService.updateUser(req.params.userID, req.body);
    res.status(httpStatus.OK).send(user);
});

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    profile,
    product,
    addToCart,
};
