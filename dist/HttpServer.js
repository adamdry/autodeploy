"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class HttpServer {
    constructor() {
        this.express = express();
        this.setupHtmlTemplating();
        this.mountRoutes();
        this.setupNotifServer();
    }
    setupHtmlTemplating() {
        this.express.set('view engine', 'pug');
        this.express.locals.pretty = true;
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            TestHarnessCtrl.handleReq(req, res)
                .then(() => {
                // do nothing
            })
                .catch((error) => {
                console.error(error);
            });
        });
        router.get('/setup', (req, res) => {
        });
        this.express.use('/', router);
        this.express.use(express.static(path.join(__dirname, 'assets')));
    }
    setupNotifServer() {
        this.notifServer = new NotifServer();
        this.notifServer.setupListener(this.express);
    }
}
exports.HttpServer = HttpServer;
exports.default = new HttpServer().express;
