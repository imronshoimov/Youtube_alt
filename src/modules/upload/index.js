const router = require('express').Router()
const { GET, POST, DELETE } = require('./controller')

router.route('/api/upload')
    .get(GET)
    .post(POST)
    .delete(DELETE)

module.exports = router