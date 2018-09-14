class HelloJob {
	static get priority () {
		return 'default' //default, allow [low, default, high]
	}
	static get retry () {
		return 5 //default
	}

	wait () {
		return new Promise((resolve) => {
			console.log('1-1')
			setTimeout(() => {
				resolve()
			}, 6000)
		})
	}

	async perform (v) {
		await this.wait()
		console.log(v,v,v,v)
	}
}
module.exports = HelloJob