require.config({
　　　　baseUrl: "js/modules",
　　　　paths: {
　　　　　　"testA": "testA",
　　　　　　"testB": "testB"
　　　　},
　		shim: {
　　　　　　'testC':{
				deps:[],
　　　　　　　　exports: 'testC'
　　　　　　},
		}

　　});
require(['testA','testB','testC'],(testA,testB,testC)=>{
	testA.isA();
	testB.singleB();
	testC();
})