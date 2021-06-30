const fs = require('fs')
const path = require('path')

const loginUser = (user) => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    let found = users.find(u => u.username == user.username && u.password == user.password)
    return found    
}

module.exports = { loginUser }