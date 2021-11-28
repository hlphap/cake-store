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
const changePassword = catchAsync(async (req, res) => {
    res.render('admin/change-password', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'change-password'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Đổi mật khẩu',
                href: '#',
            },
        ],
    });
});

const info = catchAsync(async (req, res) => {
    res.render('admin/info', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'info'],
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
    changePassword,
    info,
};
