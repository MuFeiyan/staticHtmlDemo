require.config({　　　　
	baseUrl: "js/modules",
	　　　　paths: {　　　　　　
		"Observer": "Observer",
		'Dep':'Dep',
		'Watcher':'Watcher',
		'Vue':'Vue'　　　
	}

	　　
});
/*require(["Observer"], (Observer) => {

	const obj = {
		a: {
			aa: 1
		},
		b: 2,
	}
	// 将 obj 整体 reactive 化
	var ob = Observer.Observer;
	new ob(obj);
	// 无输出
	obj.b = 2;
	// set b - 2 - 3 - newVal is Basic Value
	obj.b = 3;
	// set b - 3 - [object Object] - newVal is Object
	obj.b = {
		bb: 4
	}
	// get b-[object Object]
	obj.b;
	// get a-[object Object]
	obj.a;
	// get aa-1
	obj.a.aa
	// set aa - 1 - 3 - newVal is Basic Value
	obj.a.aa = 3

});*/
require(["Vue"], (Vue) => {
const v = new Vue.Vue({
    data: {
        a:1,
        b:2,
        c:null
    }
});
v.$watch('a',function(){
	console.info('a changed');
    v.c=new Date();
});

v.$watch('b',function(){
	v.c="b";
    console.info('the value of b has been changed !');
})
v.$watch('c',function(){
    console.info('c changed !');
})
v.a=100;
v.a=200;
v.a=300;
//v.b=200;
//v.c=1000;
});