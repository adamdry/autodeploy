import * as express from 'express'
import * as path from 'path'

export class SetupCtrl {

    public static handleReq(req, res) {
        res.render(path.join(__dirname, 'view'), {buildNumber: 'test 123'})
    }
}

export default SetupCtrl