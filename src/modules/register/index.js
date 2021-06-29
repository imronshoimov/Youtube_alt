const router = require('express').Router()
const { GET, POST, checkToken } = require('./controller')

router.route('/register')
    .get(checkToken, GET)
    .post(POST)

module.exports = router