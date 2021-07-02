const fs = require('fs')
const path = require('path')

const GET = (req, res) => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'))
    return res.send(users)
}

module.exports = { GET }