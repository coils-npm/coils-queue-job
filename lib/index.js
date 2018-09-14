const QueueManager = require('./QueueManager')
module.exports = {
	mounted (application, options) {
		let queueManager = new QueueManager(Object.assign({redis: application['_redis']}, options))
		Object.defineProperties(application, {
			'_queueManger': { "get": () => { return queueManager } }
		})
	}
}