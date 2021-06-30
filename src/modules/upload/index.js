const router = require('express').Router()
const { GET, POST } = require('./controller')

router.route('/api/upload')
    .get(GET)
    .post(POST)

module.exports = router