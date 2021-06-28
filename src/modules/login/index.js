const router = require('express').Router()
const { GET } = require('./controller')

router.route('/login')
    .get(GET)

module.exports = router