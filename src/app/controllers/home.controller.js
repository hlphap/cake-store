const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        cake: [],
        user,
    };
    // Select view to render
    return res.render('user/home', {
        title: 'Home', //  Required Title
        styles: ['layout-user', 'header', 'footer'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data, // Data to handlebars
    });
});

module.exports = {
    index,
};
