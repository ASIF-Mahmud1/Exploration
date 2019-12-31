"use strict";
exports.__esModule = true;
var express = require("express");
var HomeController = /** @class */ (function () {
    function HomeController() {
        this.path = '/';
        this.router = express.Router();
        this.index = function (req, res) {
            var users = [
                {
                    id: 1,
                    name: 'Ali'
                },
                {
                    id: 2,
                    name: 'Can'
                },
                {
                    id: 3,
                    name: 'Ahmet'
                }
            ];
            res.render('home/index', { users: users });
        };
        this.initRoutes();
    }
    HomeController.prototype.initRoutes = function () {
        this.router.get('/', this.index);
    };
    return HomeController;
}());
exports["default"] = HomeController;
