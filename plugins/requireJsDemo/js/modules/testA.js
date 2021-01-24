define(['testB'],(testB)=>{
	function isA(){
		testB.isB();	
		console.log("I'm A,relyB");
	}
	return {
		isA:isA
	}
})
