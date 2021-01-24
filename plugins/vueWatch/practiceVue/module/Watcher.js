export default class Watcher{
	constructor(vue, key, getter, isComputed) {
		this.vue = vue
		this.key = key
		this.getter = getter
		this.value = ''
		this.isComputed = isComputed
	}
	update() {
		if (this.isComputed) {
			this.value = this.getter.call(this.vue)
		} else {
			let newVal = this.vue[this.key]
			this.getter.call(this.vue, newVal, this.value)
			this.value = newVal
		}
	}
}
