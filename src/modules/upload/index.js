const router = require('express').Router()
const { GET, POST, DELETE, PUT } = require('./controller')

router.route('/api/media')
    .get(GET)
    .post(POST)
    .delete(DELETE)
    .put(PUT)

module.exports = router