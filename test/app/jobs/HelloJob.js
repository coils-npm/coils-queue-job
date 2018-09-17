class HelloJob {
	static get priority () {
		return 'default' //default, allow [low, default, high]
	}
	static get totalTry () {
		return 5 //default 10
	}
	
	static tryInterval (currentTry) {
		// default: currentTry * currentTry * currentTry * 10
		// second
		return 50
	}

	wait () {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, 16000 * Math.random())
		})
	}

	async perform (v) {
		await this.wait()
		console.log(v,v,v,v)
	}
}
module.exports = HelloJob