const testPro = async function() {
	console.log('start')
	for (let i = 0; i < 10; i++) {
		console.log(i)
	}
	testfor()
	/* testfor().then((times)=>{
					for(let i=0;i<times;i++){
					console.log('thenfor'+i)
					} 
				}) */
	console.log('end')
}
 function testfor() {
	return new Promise((resolve, reject) => {
		for (let i = 0; i < 10; i++) {
			console.log('1for' + i)
		}
		resolve(10)
		/* setTimeout(()=>{
			for(let i=0;i<10;i++){
			console.log('2for'+i)
			}
			 resolve()
			},0) */
	})
}


export default testPro