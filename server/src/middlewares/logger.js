"use strict";
exports.__esModule = true;
var loggerMiddleware = function (req, resp, next) {
    console.log('Request logged:', req.method, req.path);
    next();
};
exports["default"] = loggerMiddleware;
