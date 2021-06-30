const router = require('express').Router()
const { GET } = require('./controller')

router.route('/api/upload')
    .get(GET)

module.exports = router