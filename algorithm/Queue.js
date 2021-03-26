			function Queue() {
				this.store = [];
				this.enqueue = enqueue;
				this.outqueue = outqueue;
				this.length = getLength;
				this.startQueue = getStartQueue;
			}
			function getStartQueue() {
				return this.length() === 0 ? null : this.store[0]
			}
			function enqueue(item) {
				this.store.push(item);
			}
			function outqueue() {
				return this.store.shift();
			}
			function getLength() {
				return this.store.length;
			}
			function test2(str) {
				let q = new Queue();
				for(let i = 0; i < str.length; i++) {
					q.enqueue(str[i]);
				}
				let pa = ''
				while(q.length() > 0) {
					pa = q.outqueue() + pa;
				}
				return pa === str ? true : false
			}
			// console.log(test2('123321'));
			function maxLevelOutQueue (){
				if (this.length() === 0) {
					console.log('当前无就诊患者');
					return;
				}
				let maxIndex = 0;
				this.store.forEach((item, index) => {
					if (this.store[maxIndex].level < item.level) {
						maxIndex = index;
					}
				})
				return out = this.store.splice(maxIndex, 1);
				// return out;
			}
			function test3() {
				let arr = [
					{
						name: 'a',
						level: 1
					},
					{
						name: 'd',
						level: 4
					},
					{
						name: 'c',
						level: 3
					},
					{
						name: 'e',
						level: 1
					},
					{
						name: 'b',
						level: 2
					}
				]
				let q = new Queue();
				q.outqueue = maxLevelOutQueue;
				arr.forEach(item => {
					q.enqueue(item);
				})
				while(q.length() > 0) {
					console.log(q.outqueue());
				}
			}
			// test3();
			function test4() {
				let q = new Queue();
				q.outqueue = maxLevelOutQueue;
				q.getData = function() { return this.store; };
				q.enqueue = function(name, level) {this.store.push({name: name, level: level})};
				return q;
			}
			let four = test4();