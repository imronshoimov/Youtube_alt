const router = require('express').Router()
const { GET } = require('./controller')

router.route('/upload')
    .get(GET)

module.exports = router