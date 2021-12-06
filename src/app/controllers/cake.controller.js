const httpStatus = require('http-status');
const catchAsync = require('../../utils/catch-async');
const { cakeService } = require('../services');

const getCakes = catchAsync(async (req, res) => {
    const cakes = await cakeService.getCakes();
    res.status(httpStatus.OK).send({ cakes });
});

const createCake = catchAsync(async (req, res) => {
    const cake = await cakeService.createCake(req.body);
    res.status(httpStatus.CREATED).send({ cake });
});

// const deleteUser = catchAsync(async (req, res) => {
//     const deletedUser = await userService.deleteUser(req.params.userID);
//     res.status(httpStatus.OK).send({ deletedUser });
// });

// const profile = catchAsync(async (req, res) => {
//     // Select view to render
//     res.render('user/profile', {
//         styles: ['header', 'footer', 'profile'], // Required Stylesheet name from public
//         scripts: ['profile', 'header'], // Required Script name from public
//     });
// });

// const updateUser = catchAsync(async (req, res) => {
//     const user = await userService.updateUser(req.params.userID, req.body);
//     res.status(httpStatus.OK).send(user);
// });

module.exports = {
    getCakes,
    createCake,
};
