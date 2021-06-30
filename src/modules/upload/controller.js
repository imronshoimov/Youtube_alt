const path = require('path')
const model = require('./model')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'secret key'

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'upload.html'))
}

const POST = (req, res) => {
    let video = req.files.file
    let videoName = video.name.replace(/\s/g, "_").trim()
    video.mv(path.join(process.cwd(), 'src', 'uploads', videoName))
    let payload = jwt.verify(req.cookies.token, SECRET_KEY)
    console.log(req.body);
    let uploadVideo = model.insertVidoe(req.body, payload, videoName)
    if(uploadVideo) {
        res.status(201).json({ message: "The vide uploaded!", body: uploadVideo })
    } else {
        res.status(401).json({ message: "Something went wrong!" })
    }
}

const DELETE = (req, res) => {
    let del = model.remove(req.body)
    if(del) {
        res.status(200).json({ message: 'The vidoe has been deleted!'})
    } else {
        res.json({ message: 'Something went wrong!' })
    }
}

module.exports = { GET, POST, DELETE }