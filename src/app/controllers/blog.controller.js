const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        cake: [],
        user,
    };
    res.render('user/blog', {
        title: 'Blog', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'blog'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
};
