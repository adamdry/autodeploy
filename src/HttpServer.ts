import * as express from 'express'
import * as path from 'path'

export class HttpServer {

    public express

    constructor() {
        this.express = express()
        this.setupHtmlTemplating()
        this.mountRoutes()
        this.setupNotifServer()
    }

    private setupHtmlTemplating() {
        this.express.set('view engine', 'pug')

        this.express.locals.pretty = true;
    }

    private mountRoutes(): void {
        const router = express.Router()

        router.get('/', (req, res) => {
            TestHarnessCtrl.handleReq(req, res)
                .then(() => {
                    // do nothing
                })
                .catch((error) => {
                    console.error(error)
                })
        })

        router.get('/setup', (req, res) => {

        })

        this.express.use('/', router)
        this.express.use(express.static(path.join(__dirname, 'assets')))
    }

    private setupNotifServer(): void {
        this.notifServer = new NotifServer()
        this.notifServer.setupListener(this.express)
    }
}

export default new HttpServer().express