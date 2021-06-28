const homeRouter = require('./home')
const loginRouter = require('./login')
const registerRouter = require('./register')

module.exports = [
    homeRouter,
    loginRouter,
    registerRouter
]