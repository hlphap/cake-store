const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) =>
    res.render('user/contact', {
        title: 'About', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'contact'], // Required Stylesheet name from public
        scripts: ['signin', 'signup', 'header'], // Required Script name from public
    }),
);

module.exports = {
    index,
};
