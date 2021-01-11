  const micro = function(){
	setTimeout(()=>console.log("d"), 0)
    var r = new Promise(function(resolve, reject){
        resolve()
    });
    r.then(() => {
		console.log("c1") 
        var begin = Date.now();
        while(Date.now() - begin < 1000);
        new Promise(function(resolve, reject){
            resolve()
        }).then(() => console.log("c2"))
    });
} 


const bigTask = function(){
			console.log('sync1');
	
	setTimeout(function () {
	    console.log('setTimeout1')
	}, 0);
	
	var promise = new Promise(function (resolve, reject) {
	    setTimeout(function () {
	        console.log('setTimeoutPromise')
	    }, 0);
	    console.log('promise');
	    resolve();
	});
	
	
	promise.then(() => {
	    console.log('pro_then');
	    setTimeout(() => {
	        console.log('pro_timeout');
	    }, 0)
	})
	
	setTimeout(function () {
	    console.log('last_setTimeout')
	}, 0);
	console.log('sync2');
}
export default micro