const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    const order = {
        name: 'com',
        price: 5000,
    };
    return res.render('menu/menu', {
        style: 'header.css',
        order,
    });
});

module.exports = {
    index,
};
