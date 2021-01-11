let date = () => {
	return (new Date()).getTime()
}
let fun = function*() {
	for(let i = 0; i < 5000 ; i++) {
		console.log('1');
		yield
	}
}
const ts = function(gen) {
	let t = date()
	let fun = gen()
	let res = null
	let next = () => {
		res = fun.next();
		let start = date()
		while(!res.done) {
			if(date() - start < 10) {
				res = fun.next()
			} else {
				setTimeout(next)
				break
			}
		}
		if (res.done) console.log('yield时间：', date() - t);
	}
	next()
}

ts(fun)