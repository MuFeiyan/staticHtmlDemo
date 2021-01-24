define(["Dep"],(Dep) =>{
	function makeItReactive(obj, key, val) {
		var dep = new Dep()
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get: () => {
				// 收集依赖！ 如果该 key 被某个 watcher 实例依赖，则将该 watcher 实例置入该 key 对应的 dep 实例里
				if(Dep.target) {
					dep.addSub(Dep.target)
				}
				return val
			},
			set: (newVal) => {
				if(newVal === val) {
					return;
				} else if(isObject(newVal)) {
					new Observer(newVal);
					val = newVal;
					// 通知 dep 实例, 该 key 被 set，让 dep 实例向所有收集到的该 key 的 watcher 实例发送通知
					dep.notify()
				} else if(!isObject(newVal)) {
					val = newVal;
					// 通知 dep 实例, 该 key 被 set，让 dep 实例向所有收集到的该 key 的 watcher 发送通知
					dep.notify()
				}
			}
		})
	}
	return {
		Observer_watcher:Observer_watcher
	}
})
