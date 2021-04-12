// 获取当前时间的毫秒数
function getTime() {
	return (new Date()).getTime();
}
// 函数执行花费的时间
function takeTime(f, name = '') {
	let startTime = getTime();
	f();
	let endTime = getTime();
	console.log(name + "花费时间:"+ (endTime - startTime));
}
// 生成count个数据，每个生成数据区间：[0, count]
export const generateData = count => {
	let data = []
	for(let i = 0; i < count ; i++) {
		data.push(Math.round(Math.random()*count));
	}
	return data;
}
// 排序算法，从小到大
// 冒泡排序 (遍历数组交换数组左右位置， 直到循序正确不需要交换)
export const bubbleSort = arr => {
	if(arr.length < 2) return arr;
	let bubble = () => {
		let exTimes = 0;
		for(let i = 1; i < arr.length; i++) {
			let beforeVal = arr[i - 1]
			if (arr[i] < beforeVal) {
				arr[i - 1] = arr[i];
				arr[i] = beforeVal;
				exTimes ++;
			}
		}
		if (exTimes > 0) bubble();
	}
	takeTime(bubble, "冒泡排序");
	return arr;
}
// 选择排序 (依次找出最小的数，需比较n(n-1)/2次)
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
// 插入排序  (遍历数组，前n-1位已排好序，将第n位插入到前n-1顺序中，最多需比较n(n-1)/2次 )
export const insertSort = arr => {
	let length = arr.length;
	if(length < 2) return arr;
	let insert = index => {
		let num = arr[index];
		let i = index;
		for(; i > 0 && num < arr[i-1] ; i--) {
				arr[i] =  arr[i-1]; // 向后移一位
		}
		// 插入
		arr[i] = num;
	}
	let sort = () => {
		for(let i = 1; i < length; i++) {
			insert(i);
		}
	}
	takeTime(sort, "插入排序");
	return arr;
}
// 希尔排序 数据量大占优势 插入排序的优化版
export const shellSort = (arr, gaps) => {
	let sort = () => {
		let length = arr.length;
		for(let g = 0; g < gaps.length ; g++) {
			let gap = gaps[g];
			for(let i = gap; i < length ; i++) {
				let tem = arr[i];
				let j = i;
				for(;j >= gap && arr[j - gap] > tem; j = j - gap) {
					arr[j] = arr[j - gap];
				}
				arr[j] = tem;
			}
		}
	}
	takeTime(sort, "希尔排序");
	return arr;
}
// 归并排序
export const mergeSort = arr => {
	if(arr.length < 2) return arr;
	let merge = (leftArr, rightArr) => {
		let result = [];
		while(leftArr.length > 0 && rightArr.length > 0) {
			if (leftArr[0] > rightArr[0]) {
				result.push(rightArr.shift());
			} else {
				result.push(leftArr.shift());
			}
		}
		return result.concat(leftArr).concat(rightArr);
	}
	let data = [];
	let sort = () => {
		for(let i = 0; i < arr.length ; i++) {
			data.push([arr[i]]);
		}
		while(data.length > 1) {
			data.push(merge(data.shift(), data.shift()))
		}
		return data;
	}
	takeTime(sort, '归并排序');
	return data[0];
}
// 快速排序 冒泡排序的优化版
export const quickSort = arr => {
	if(arr.length < 2) return arr;
	let sort = (start, end) => {
		let base = arr[start];
		let middleIndex = start;
		for(let i = start + 1; i <= end ; i++) {
			if (arr[i] <= base) {
				arr[middleIndex] = arr[i];
				middleIndex ++;
				arr[i] = arr[middleIndex];
			}
		}
		arr[middleIndex] = base;
		if (middleIndex - start > 1) {
			sort(start, middleIndex - 1);
		}
		if (end - middleIndex > 1) {
			sort(middleIndex + 1, end);
		}
	}
	takeTime(() => sort(0, arr.length - 1), "快速排序");
	return arr
}
