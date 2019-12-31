"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
        this.template();
    }
    App.prototype.middlewares = function (middleWares) {
        var _this = this;
        middleWares.forEach(function (middleWare) {
            _this.app.use(middleWare);
        });
    };
    App.prototype.routes = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/', controller.router);
        });
    };
    App.prototype.assets = function () {
        this.app.use(express.static('public'));
        this.app.use(express.static('views'));
    };
    App.prototype.template = function () {
        this.app.set('view engine', 'pug');
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the http://localhost:" + _this.port);
        });
    };
    return App;
}());
exports["default"] = App;
