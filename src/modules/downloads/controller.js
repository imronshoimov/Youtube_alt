const path = require('path')

const GET = (req, res) => {
    let file = path.join(process.cwd(), 'src', 'uploads', req.query.video)
    res.download(file)
}

module.exports = { GET }