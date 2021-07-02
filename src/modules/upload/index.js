const router = require('express').Router()
const { GET, POST, DELETE, PUT } = require('./controller')

router.route('/upload')
    .get(GET)
    .post(POST)
    .delete(DELETE)
    .put(PUT)

module.exports = router