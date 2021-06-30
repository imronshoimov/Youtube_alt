const router = require('express').Router()
const { GET, POST, checkToken } = require('./controller')

router.route('/login')
    .get(checkToken, GET)
    .post(POST)

module.exports = router