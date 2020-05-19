const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res, next) => {
    res.send('Hi')
})

app.listen(port, () => {
    console.log('The app is running on ' + port)
})