const router = require('express').Router()
const { GET } = require('./controller')

router.route('/users')
    .get(GET)

module.exports = router