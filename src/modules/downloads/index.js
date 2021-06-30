const router = require('express').Router()
const { GET } = require('./controller')

router.route('/api/download')
    .get(GET)

module.exports = router