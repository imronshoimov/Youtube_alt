const fs = require('fs')
const path = require('path')

const GET = (req, res) => {
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'))
    return res.send(videos)
}

module.exports = { GET }