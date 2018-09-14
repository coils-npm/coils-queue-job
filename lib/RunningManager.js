const JobManager = require('./JobManager')
class RunningQueue {
	constructor ({queueManager, redis, namespace, waitingStorageSet, runningStorageSet, retryStorageSet, failedStorageSet}) {
		this.queueManager = queueManager
		this.redis = redis
		this.readyStackNamespace = `${namespace}:ready_stack`
		this.runningStackNamespace = `${namespace}:running_stack`
		this.waitingStorageSet = waitingStorageSet
		this.runningStorageSet = runningStorageSet
		this.retryStorageSet = retryStorageSet
		this.failedStorageSet = failedStorageSet
	}

	start () {
		this._runPolling()
		this._performJobs()
	}
	
	_runPolling () {
		setTimeout(async () => {
			// 轮询延迟任务任务
			await this._runPollingStorageSet(this.waitingStorageSet)
			// 下一次轮询
			this._runPolling()
		}, parseInt(this.queueManager.pollingInterval * 1000 * 2 * Math.random()))
	}

	// 检查获取队列可执行任务来执行
	async _performJobs (timeout = 0) {
		console.log('.............in')
		setTimeout(async () => {
			if (this.queueManager.currentConcurrency < this.queueManager.concurrency) {
				let redisKey = await this.redis.rpop(this.readyStackNamespace)
				if (redisKey) {
					await this.redis.lpush(this.runningStackNamespace, redisKey)
					this.queueManager.currentConcurrency++
					setTimeout(async () => {
						try {
							let obj = JSON.parse(redisKey)
							let Job = this.queueManager.jobs
							for (let key of obj['Job'].split('.')) {
								Job = Job[key]
							}
							await (new Job()).perform(...obj.args)
						} catch (err) {
							this.retryStorageSet.add(redisKey)
							console.error(err)
						} finally {
							this.queueManager.currentConcurrency--
							await this.redis.lrem(this.runningStackNamespace, 1, redisKey)
						}
					})
					if (this.queueManager.currentConcurrency < this.queueManager.concurrency && redisKey) {
						timeout = 1
					}
				}
			}
			// 下一轮
			this._performJobs(timeout)
		}, timeout)
		timeout = this.queueManager.pollingInterval * 1000 * Math.random()
	}
	
	async _runPollingStorageSet (storageSet) {
		let key = `${storageSet.namespace}:had_polling`
		console.log('begin.....')
		if (await this.redis.setnx(key, true)) {
			console.log('in...')
			try {
				// 可执行任务 全部放到 可执行集合(ReadyStorageSet)
				await this._pollingStorageSetToReadyStack(this.waitingStorageSet)
				await this._pollingStorageSetToReadyStack(this.retryStorageSet)
			} catch (err) { console.error(err) }
			// 轮询一个周期的时间过期，才可以再次轮询, 防止资源浪费
			await this.redis.expire(key, this.queueManager.pollingInterval)
		}
	}
	
	async _pollingStorageSetToReadyStack (storageSet) {
		let redisKeys = await this.redis.zrangebyscore(storageSet.namespace, 0, parseInt(Date.now() / 1000))
		let redisKeyObjs = redisKeys.map(item => JSON.parse(item))
		redisKeyObjs.sort((a, b) => { return a.priority - b.priority })
		for (let obj of redisKeyObjs) {
			let redisKey = JSON.stringify(obj)
			if (obj.priority === 'high') {
				await this.redis.rpush(this.readyStackNamespace, redisKey)
			} else {
				await this.redis.lpush(this.readyStackNamespace, redisKey)
			}
			console.log(storageSet.namespace, 1)
			await this.redis.zrem(storageSet.namespace, redisKey)
		}
	}

	
	// 可执行消息 进入 执行队列
	// async _jobsToRunningStack () {
	// 	try {
	// 		let existJobsCount = await this.redis.llen(this.stackNamespace)
	// 		let shouldPollingCount = this.queueManager.concurrency - existJobsCount
	// 		if (shouldPollingCount > 0) {
	// 			let jobs = await this.redis.zrangebyscore(this.namespace, 0, parseInt(Date.now() / 1000), 'limit', 0, shouldPollingCount )
	// 			for (let redisKey of jobs) {
	// 				if (await this._fetchStorageJobToRunningPolicy(redisKey)) {
	// 					// 任务进栈
	// 					await this._pushOneJobToStack(redisKey)
	// 					// 从可执行记录集中删除
	// 					await this.redis.zrem(storeageSet.namespace, redisKey)
	// 				}
	// 			}
	// 		}
	// 	} catch (err) { console.log(err) }
	// 	return Promise.resolve()
	// }
	
	// job should JobManager or redisKey
	// async add (jobManager) {
	// 	return Promise.resolve(await this.redis.zadd(this.namespace, jobManager.score, jobManager.redisKey))
	// }
}
module.exports = RunningQueue