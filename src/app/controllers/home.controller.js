const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    // Create fake data
    const data = {
        cake: [],
        user: 'sdf',
    };
    // Select view to render
    return res.render('user/home', {
        title: 'Home', //  Required Title
        styles: ['layout-user', 'header', 'footer'], // Required Stylesheet name from public
        scripts: ['signin', 'signup', 'header'], // Required Script name from public
        data, // Data to handlebars
    });
});

module.exports = {
    index,
};
