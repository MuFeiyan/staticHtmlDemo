define(()=>{
	function isB(){
		console.log("I'm B");
	}
	function singleB(){
		console.log("I'm single");
	}
	return {
		isB:isB,
		singleB:singleB
	}
})