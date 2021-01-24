//在 Javascript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象一直会保存在内存中。
//闭包
function A1() {
	var i = 0;
	var addI = function() {
		i++;
		console.log(i);
	}
	function test(){
		
	}
	return addI;
}
var  bBPa1=A1();
bBPa1();
bBPa1();
console.log("在上述例子中，bBPa1引用A1中的函数 addI，addI的值又依赖A1中变量i,bBPa1依赖A1的变量i,故执行‘var  bBPa1=A1();’后，A1中的i一直被函数bBPa1间接引用，未被GC回收");
//闭包反例
function A2(){
	var f=[];
	for(var i=0;i<5;i++){
		f[i]=function(){
			console.log(i);
		}
	};
	return f;
}
var bBpa2=A2();
bBpa2[0]();
bBpa2[1]();
console.log("---------------------------------------------");
//通过该例再次理解闭包
function biBaoDemo() {
	for(var i = 0; i < 3; i++) {
		setTimeout((function(d) {
			return function() {
				console.log(d);//d改成i试试
			}
		})(i + 2), 1000);
	}
}
biBaoDemo();