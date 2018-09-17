# CoilsQueueJob
[application._queueJob]

### Install
```
npm i coils-queue-job -S
```

### Usage

Coils application constructor
```
let CoilsQueueJob = require('coils-queue-job')
this.use(CoilsQueueJob[, options])
```
options
- redis: redis client, default: `application._redis`
- path: default: `app/jobs` 
- namespace: default: `_coils_jobs_`

### 添加延时任务
```
# 10s 后执行 app/jobs目录下的HelloJob任务
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after1')
```

#### 目录结构
![](https://github.com/coils-npm/coils-queue-job/blob/master/test/assets/struct.jpg?raw=true)
- In `app/logs/index.js` write 
```
const requireDirectory = require('require-directory')
module.exports = requireDirectory(module)
```
confirm install npm dependence: `require-directory`

- `app/jobs/HelloJob.js`
```
class HelloJob {
	// 执行优先级
	static get priority () {
		return 'default' //default, allow [low, default, high]
	}
	// 总尝试次数
	static get totalTry () {
		return 5 //default 10
	}
	// 根据当前尝试次数，返回下一次尝试间隔
	static tryInterval (currentTry) {
		// default: currentTry * currentTry * currentTry * 10
		// second
		return 50
	}
	// 任务执行时候将调用此方法
	async perform () {
		console.log(arguments)
	}
}
module.exports = HelloJob
```
