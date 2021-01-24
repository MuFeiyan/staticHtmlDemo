import Dep from'./Dep.js'
export function observe (vue, data) {
	let keys = Object.keys(data)
	keys.forEach(key => {
		new observeProxy(vue, key)
	})
}

function observeProxy(obj, key) {
	let property = Object.getOwnPropertyDescriptor(obj, key)
	let getter = property.get
	let setter = property.set
	let dep = new Dep()
	console.log(key, dep)
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: true,
		get: function() {
			if (Dep.target) {
				// 收集依赖
				dep.depend()
			}
			let val = getter.call(obj)
			return val
		},
		set: function(val) {
			setter.call(obj, val)
			// 更新依赖
			dep.notify()
		}
	})
}
