const path = require('path')
const model = require('./model')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'register.html'))
}

const POST = (req, res) => {
    let file = req.files.file
    let fileName = file.name.replace(/\s/g, "_").trim()
    file.mv(path.join(process.cwd(), 'src', 'uploads', fileName))
    let user = model.insertUser(req.body, fileName)
    if(req.body) {
        res.status(201).json({ message: "The user has registered!", body: req.body })
        // res.cookie('token', jwt.sign({ body: req.body.username }, 'SECRET_KEY'))
    } res.status(401).json({ message: "The user has already exists!" })
}

module.exports = { GET, POST }