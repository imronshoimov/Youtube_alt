const host = require('./lib/getIp')({ internal: false })
const PORT = 5300

module.exports = { host, PORT }