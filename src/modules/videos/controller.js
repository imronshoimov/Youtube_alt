const GET = (req, res) => {
    let videos = require('../../database/videos.json')
    return res.send(videos)
}

module.exports = { GET }