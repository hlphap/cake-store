const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const orders = [
        {
            name: 'RED VELVET CAKE',
            price: 250000,
            expiration: 27 - 12 - 2000,
            description: 'Bánh ngon nhất hạng',
            typeCake: {
                id: '123',
                name: 'Bánh sinh nhật',
            },
            numTym: 15,
            discount: 25,
            image: '/image/menu/red_velvet.jpg',
        },
    ];
    const data = {
        user,
        orders,
    };
    return res.render('user/menu', {
        title: 'Menu', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'menu'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
};
