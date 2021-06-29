const path = require('path')
const model = require('./model')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "secret key"

function checkToken (req, res, next) {
    try {
        if (req.cookies.token) {
            let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'UTF-8')
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
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'register.html'))
}

const POST = (req, res) => {
    let file = req.files.file
    let fileName = file.name.replace(/\s/g, "_").trim()
    file.mv(path.join(process.cwd(), 'src', 'uploads', fileName))
    let user = model.insertUser(req.body, fileName)
    if(user) {
        res.cookie('token', jwt.sign(user.userId, SECRET_KEY))
        res.status(201).json({ message: "The user has registered!", body: user })
    } else {
        res.status(401).json({ message: "The user has already exists!" })
    }
}   

module.exports = { GET, POST, checkToken }