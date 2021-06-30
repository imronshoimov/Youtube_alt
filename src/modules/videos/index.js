const router = require('express').Router()
const { GET } = require('./controller')

router.route('/videos')
    .get(GET)

module.exports = router