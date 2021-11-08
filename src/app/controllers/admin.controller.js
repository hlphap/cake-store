const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    res.render('admin/admin', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Thông tin cá nhân',
                href: '#',
            },
        ],
    });
});

module.exports = {
    index,
};
