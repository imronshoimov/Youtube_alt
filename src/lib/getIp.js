const getIPAddress = ({ internal }) => {
	const { networkInterfaces } = require('os')
	const nets = networkInterfaces()
	let networks = Object.keys(nets)
	let internalNetwork = 'localhost'
	let externalNetwork = 'localhost'
	for (const name of networks) {
	    for (const net of nets[name]) {
	        if (net.family === 'IPv4' && !net.internal && !internal) {
	          	externalNetwork = net.address
	        } else if (net.family === 'IPv4' && net.internal && internal) {
	        	internalNetwork = net.address
	        }
	    }
	}
	return internal ? internalNetwork : externalNetwork
}

module.exports = getIPAddress