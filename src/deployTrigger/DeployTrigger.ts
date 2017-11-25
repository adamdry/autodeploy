export class DeployTrigger {

    private readonly SECRET = 'iuawhdiauhf93w8r9w8h3fiwahfwaufnalihfu3q8u3'

    public static handleReq(req, res) {
        console.log('trigger deploy!!')
        res.send('trigger deploy')
    }

}

export default DeployTrigger