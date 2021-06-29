const homeRouter = require('./home')
const loginRouter = require('./login')
const registerRouter = require('./register')
const uploadRouter = require('./upload')
const usersRouter = require('./users')

module.exports = [
    homeRouter,
    loginRouter,
    registerRouter,
    uploadRouter,
    usersRouter
]