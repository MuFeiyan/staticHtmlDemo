const test_reduce = function(){
	let arr = [{x: 1}, {x:2}, {x:3}]
	add(arr)
	switchTest()
	reduceSame()
}
function add(arr){
	let sum = arr.reduce((acc,cur)=>{
		return acc+cur.x
	},0)
	console.log('add:'+sum) 
}
function switchTest(){
	let flattened = [[0, 1], [2, 3], [4, 5]]
	let arr = flattened.reduce((acc,cur)=>{
		return acc.concat(cur)
		//return [...acc,...cur]
	})
	console.log('switch:'+arr)
}
function reduceSame(){
	let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
	let arr1 = arr.reduce((acc,cur)=>{
		if(acc.indexOf(cur)<0){
			acc.push(cur)
		}
		return acc
	},[])
	console.log('reduceSame:'+arr1) 
}
export default test_reduce