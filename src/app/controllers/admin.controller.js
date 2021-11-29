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
const managerCake = catchAsync(async (req, res) => {
    const data = [
        {
            name:"cake1",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake2",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake3",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000324234,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
    ]
    res.render('admin/managerCake', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý bánh',
                href: '#',
            },
        ],
    });
});

module.exports = {
    index,
    changePassword,
    managerCake,
    info,
};
