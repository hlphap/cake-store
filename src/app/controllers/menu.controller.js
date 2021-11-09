const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    const order = {
        name: 'com',
        price: 5000,
    };
    return res.render('user/menu/menu', {
        styles: ['header', 'footer'],
        order,
    });
});

module.exports = {
    index,
};
