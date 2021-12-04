const compression = require('compression');
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
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

    // sanitize request data
    app.use(mongoSanitize());

    // gzip compression
    app.use(compression());

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
