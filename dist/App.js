"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const post_1 = require("./routes/post");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        this.socketRoutes();
    }
    mountRoutes() {
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.express.use('/', post_1.default);
    }
    socketRoutes() {
    }
}
exports.default = new App().express;
