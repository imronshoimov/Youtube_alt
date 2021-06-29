const fs = require('fs')
const path = require('path')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'upload.html'))
}

module.exports = { GET }