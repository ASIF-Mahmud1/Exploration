"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var bodyParser = require("body-parser");
var logger_1 = require("./middlewares/logger"); //'../middleware/logger'
//import PostsController from   './controllers' //'./controllers/posts/posts.controller'
var home_controller_1 = require("./controllers/home.controller"); //'./controllers/home/home.controller'
var app = new app_1["default"]({
    port: 5000,
    controllers: [
        new home_controller_1["default"](),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger_1["default"]
    ]
});
app.listen();
