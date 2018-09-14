const JobItem = require('./lib/JobItem')
class BaseJob {
	static get priority () {
		// low default high
		return 'default'
	}

	static get totalTry () {
		// times
		return 5
	}

	static get tryInterval () {
		// second
		// return 50
		return [5, 60, 60 * 5, 60 * 30, 60 * 60, 60 * 60 * 12]
	}
}