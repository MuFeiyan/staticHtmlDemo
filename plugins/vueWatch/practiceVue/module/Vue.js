import { observe } from './Observe.js'
import Watcher from './Watcher.js'
import Dep from './Dep.js'
export default class Vue{
	constructor(options) {
	    options.data && initData(this, options.data)
	    options.computed && initComputed(this, options.computed)
	    options.watcher && initWatcher(this, options.watcher)
	}
}
function initData(vue, data) {
	vue._data = data
	proxy(vue, data, '_data')
	observe(vue, data)
}

function proxy(obj, data, proxyName) {
	let keys = Object.keys(data)
	keys.forEach(key => {
		defineProperty(obj, key, proxyName)
	})
}
function defineProperty(obj, key, proxyName) {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: true,
		get: function() {
			return obj[proxyName][key]
		},
		set:function(val) {
			obj[proxyName][key] = val
		}
	})
}
function initComputed(vue, computeds) {
	let keys = Object.keys(computeds)
	keys.forEach(key => {
		// 计算属性不应该有set方法
		let fun = computeds[key]
		let watcher = new Watcher(vue, key, fun, true)
		Dep.target = watcher
		let val = fun.call(vue)
		Dep.target = null
		defineComputedProperty(vue, key, watcher)
	})
}
function defineComputedProperty(obj, key, watcher) {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: true,
		get: function() {
			return watcher.value
		},
		set:function(val) {
			throw new Error('computed不能被赋值')
		}
	})
}
function initWatcher(obj, _watcher) {
	let keys = Object.keys(_watcher)
	keys.forEach(key => {
		let fun = _watcher[key]
		let watcher = new Watcher(obj, key, fun, false)
		Dep.target = watcher
		obj[key]
		Dep.target = null
	})
}
