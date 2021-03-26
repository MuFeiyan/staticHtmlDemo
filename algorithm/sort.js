function getTime() {
	return (new Date()).getTime();
}
function takeTime(f, name = '') {
	let startTime = getTime();
	f();
	let endTime = getTime();
	console.log(name + "花费时间:"+ (endTime - startTime));
}
export const generateData = count => {
	let data = []
	for(let i = 0; i < count ; i++) {
		data.push(Math.round(Math.random()*count));
	}
	return data;
}
// 排序算法，从小到大
// 冒泡排序 
export const bubbleSort = arr => {
	if(arr.length < 2) return arr;
	let bubble = () => {
		let stopSort = true;
		for(let i = 1; i < arr.length; i++) {
			let beforeVal = arr[i - 1]
			if (arr[i] < beforeVal) {
				arr[i - 1] = arr[i];
				arr[i] = beforeVal;
				stopSort && (stopSort = false);
			}
		}
		if (!stopSort) bubble();
	}
	takeTime(bubble, "冒泡排序");
	return arr;
}
// 选择排序 
export const selectSort = arr => {
	if(arr.length < 2) return arr;
	let length = arr.length;
	let min = index => {
		let minNum = arr[index];
		for(let i = index + 1; i < length ; i++) {
			if (minNum > arr[i]) {
				arr[index] = arr[i];
				arr[i] = minNum;
				minNum = arr[index]
			}
		}
	}
	let srot = () => {
		for(let i = 0; i < length ; i++) {
			min(i);
		}
	}
	takeTime(srot, "选择排序");
	return arr;
}
// 插入排序 sort1效率会高一些
export const insertSort = arr => {
	let length = arr.length;
	if(length < 2) return arr;
	// 此处使用交换位置
	let insert1 = index => {
		for(let i = index; i > 0 ; i--) {
			let num = arr[i]
			if (num < arr[i-1]) {
				arr[i] =  arr[i-1];
				arr[i-1] = num;
			} else {
				break;
			}
		}
	}
	let sort1 = () => {
		for(let i = 1; i < length; i++) {
			insert1(i);
		}
	}
	// 也可以使用splice插入, 效率和数据原有的顺序有关
	let insert2 = index => {
		let num = arr[index];
		for(let i = index; i > 1 ; i--) {
			if (num <= arr[i - 1] && num >= arr[i - 2]) {
				arr.splice(index, 1)[0];
				arr.splice(i-1, 0 , num);
				break;
			}
		}
	}
	let sort2 = () => {
		if (arr[0] > arr[1]) {
			let num = arr[0]
			arr[0] = arr[1]
			arr[1] = num
		}
		for(let i = 2; i < length; i++) {
			insert2(i);
		}
	}
	takeTime(sort2, "插入排序");
	return arr
}
