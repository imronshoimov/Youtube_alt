const homeRouter = require('./home')
const loginRouter = require('./login')
const registerRouter = require('./register')
const uploadRouter = require('./upload')
const usersRouter = require('./users')
const videosRouter = require('./videos')

module.exports = [
    homeRouter,
    loginRouter,
    registerRouter,
    uploadRouter,
    usersRouter,
    videosRouter
]