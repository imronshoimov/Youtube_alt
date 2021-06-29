const GET = (req, res) => {
    let users = require('../../database/users.json')
    return res.send(users)
}

module.exports = { GET }