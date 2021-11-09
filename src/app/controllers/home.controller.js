const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    // Create fake data
    const data = {
        cake: [],
    };
    // Select view to render
    return res.render('user/home', {
        title: 'Home', //  Required Title
        styles: ['header', 'footer'], // Required Stylesheet name from public
        scripts: ['signin', 'signup'], // Required Script name from public
        data, // Data to handlebars
    });
});

module.exports = {
    index,
};
