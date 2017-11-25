import app from './HttpServer'

const port = process.env.PORT || 3127

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})