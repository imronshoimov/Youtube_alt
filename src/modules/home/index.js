const router = require('express').Router()
const { GET } = require('./controller')

router.route('/')
    .get(GET)

module.exports = router