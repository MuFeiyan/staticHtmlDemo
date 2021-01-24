define(['Observer','Watcher'],(Observer,Watcher) => {
  class Vue {
  constructor(options) {
    // 在 this 上挂载一个公有变量 $options ,用来暂存所有参数
    this.$options = options
    // 声明一个私有变量 _data ,用来暂存 data
    let data = this._data = this.$options.data
    // 在 this 上挂载所有 data 里的 key 值， 这些 key 值对应的 get/set 都被代理到 this._data 上对应的同名 key 值
    Object.keys(data).forEach(key => this._proxy(key));
    // 将 this._data 进行 reactive 化
    new Observer.Observer(data, this)
  }
  // 对外暴露 $watch 的公有方法，可以对某个 this._data 里的 key 值创建一个 watcher 实例
  $watch(expOrFn, cb) {
    // 注意，每一个 watcher 的实例化都依赖于 Vue 的实例化对象, 即 this
    new Watcher.Watcher(this, expOrFn, cb)
  }
  //  将 this.keyName 的某个 key 值的 get/set 代理到  this._data.keyName 的具体实现
  _proxy(key) {
    var self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter() {
        return self._data[key]
      },
      set: function proxySetter(val) {
        self._data[key] = val
      }
    })
  }
}
  return {
  	Vue:Vue
  }
})
