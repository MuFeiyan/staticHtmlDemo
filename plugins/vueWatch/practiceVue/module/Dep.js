let uid = 0
export default class Dep {
	static Target
	constructor() {
		this.id = uid ++
		this.subs = []
	}
	depend() {
		if (Dep.target) {
			this.subs.push(Dep.target)
		}
	}
	notify() {
		this.subs.forEach(watcher => watcher.update())
	}
}
