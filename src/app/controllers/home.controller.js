const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    // Create fake data
    const data = {
        cake: [],
    };
    // Select view to render
    return res.render('home', {
        title: '', //  Required Title
        stylesheet: 'header.css', // Required Stylesheet name from public
        script: '', // Required Script name from public
        data, // Data to handlebars
    });
});

module.exports = {
    index,
};
