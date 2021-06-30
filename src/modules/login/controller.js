const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const model = require('./model')
const SECRET_KEY = "secret key"

function checkToken (req, res, next) {
    try {
        if (req.cookies.token) {
            let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
            users = users ? JSON.parse(users) : []
            let payload = jwt.verify(req.cookies.token, SECRET_KEY)
            let found = users.find(user => user.user_id == payload)
            if (found) {
                res.redirect('/upload')
            } else throw 'error'
        } else throw 'error'
    } catch (err) {
        next()
    }
}

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'login.html'))
}

const POST = (req, res) => {
    let user = model.loginUser(req.body)
    try {
        if(user) {
            res.cookie('token', jwt.sign(user.userId, SECRET_KEY))
            res.status(200).json({ message: "The user has logged in!", userId: user.id, body: user })
        } else res.status(401).json({ message: "Wrong password or username" })
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

module.exports = { GET, POST, checkToken }
