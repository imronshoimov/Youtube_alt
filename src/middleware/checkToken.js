function checkToken (req, res, next) {
    if(req.cookies.token) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports = { checkToken }