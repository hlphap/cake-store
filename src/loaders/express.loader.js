const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const env = require('../configs/env');
const { errorConverter, errorHandler } = require('../middlewares/error');
const routeConfig = require('../app/routes');

module.exports = () => {
    const app = express();

    // set log request
    app.use(morgan('dev'));

    // parse json request body
    app.use(express.json());

    // parse urlencoded request body
    app.use(express.urlencoded({ extended: true }));

    //cookie middleware
    app.use(cookieParser());

    // set cors blocked resources

    // api routes
    app.use('/', routeConfig);

    // convert error to ApiError, if needed
    app.use(errorConverter);

    // handle error
    app.use(errorHandler);

    app.listen(env.app.port);

    return app;
};
