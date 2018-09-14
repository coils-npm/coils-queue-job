const JobManager = require('./JobManager')
class StorageSet {
	constructor ({queueManager, redis, namespace}) {
		this.queueManager = queueManager
		this.redis = redis
		this.namespace = namespace
		// this.priority = priority || 'default'
		// console.assert(['high', 'default', 'low'].indexOf(priority) !== -1, 'priority must in [high, default, low]')
	}
	// jobManager or redisKey
	add (item) {
		if (item instanceof JobManager) {
			let jobManager = item
			this.redis.zadd(this.namespace, jobManager.score, jobManager.redisKey)
		} else {
			let redisKey = item
			let obj = JSON.parse(redisKey)
			let Job = this.queueManager.jobs
			for (let key of obj['Job'].split('.')) {
				Job = Job[key]
			}
			let additionScore = obj.currentTry * obj.currentTry * obj.currentTry * 10
			if (Job.tryInterval) {
				if (Array.isArray(Job.tryInterval) && obj.currentTry < Job.tryInterval.length) {
					additionScore = Job.tryInterval[obj.currentTry]
				} else { // 数字
					additionScore = Job.tryInterval
				}
			}
			this.redis.zadd(this.namespace, parseInt(obj.msScore / 1000 + additionScore), redisKey)
		}
	}
}
module.exports = StorageSet