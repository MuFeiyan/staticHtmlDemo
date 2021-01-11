//延迟函数
			function waitTime(type, time) {
				let startT = (new Date()).getTime()
				while ((new Date()).getTime() - startT < time) {}
				console.log(type);
			}
			function getPromise() {
				return new Promise((resolve, reject) => {
					//下面是同步执行
					waitTime('promise', 1000) //1s后打印promise
					resolve() //执行catch or resolve() 执行then()
				}, )
			}
			const testPro = function() {
				getPromise().then(() => {
					//异步执行
					waitTime('then', 1000)
				}).catch(() => {
					//异步执行
					waitTime('catch', 1000)
				})
				console.log("later");
			}
			
			
// a、js原本是同步执行的（）
// b、Promise 是同步执行的，但他的回调函数（then/catch）是异步执行

export default testPro 