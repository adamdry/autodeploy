import * as express from 'express'
import * as path from 'path'
import SetupCtrl from "./setup/SetupCtrl"
import DeployTrigger from "./deployTrigger/DeployTrigger";

export class HttpServer {

    public express

    constructor() {
        this.express = express()
        this.setupHtmlTemplating()
        this.mountRoutes()
    }

    private setupHtmlTemplating() {
        this.express.set('view engine', 'pug')
        this.express.locals.pretty = true;
    }

    private mountRoutes(): void {
        const router = express.Router()

        router.get('/', (req, res) => {
            SetupCtrl.handleReq(req, res)
        })

        router.get('/triggerdeploy', (req, res) => {
            DeployTrigger.handleReq(req, res)
        })

        this.express.use('/', router)
        this.express.use(express.static(path.join(__dirname, 'assets')))
    }

}

export default new HttpServer().express