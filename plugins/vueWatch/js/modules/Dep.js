define(() => {
 class Dep {
		constructor() {
			this.subs = [];
		}
		// 将 watcher 实例置入队列
		addSub(sub) {
			this.subs.push(sub);
		}
		// 通知队列里的所有 watcher 实例，告知该 key 的 对应的 val 被改变
		notify() {
			this.subs.forEach((sub, index, arr) => sub.update());
		}
	}

	// Dep 类的的某个静态属性，用于指向某个特定的 watcher 实例.
	Dep.target = null
	return {
		Dep:Dep
	}
})