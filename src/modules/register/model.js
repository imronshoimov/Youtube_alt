const fs = require('fs')
const path = require('path')

const insertUser = (data, image) => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'UTF-8')
    users = users ? JSON.parse(users) : []
    let found = users.find(user => user.username == data.username)
    if(!found) {
        let userId = users.length ? users[users.length - 1].userId + 1 : 1
        let newUser = { userId, ...data, image }
        users.push(newUser)
        fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), JSON.stringify(users, null, 4))
        delete newUser.password
        return newUser
    } else return
}

module.exports = { insertUser }