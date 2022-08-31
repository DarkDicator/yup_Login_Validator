const express = require('express')
const app = express()
const validation = require('./middlewares/validateReq.js')
const userSchema = require('./validation/validateLogin.js')

app.use(express.json())

app.post('/login', validation(userSchema), (req, res) => {
    res.status(200).send(req.body)
})

app.listen(3000, () => {
    console.log("Server listening on port 3000")
})