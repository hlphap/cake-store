const exphbs = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    app.engine(
        'hbs',
        exphbs({
            extname: '.hbs',
            helpers: {
                sum: (a, b) => a + b,
            },
            defaultLayout: 'user',
        }),
    );
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../app/views/views'));
};
