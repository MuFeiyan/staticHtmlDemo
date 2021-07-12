var fixedNumber =
{
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};
let unit = ['thousand', 'million', 'billion', 'trillion', 'quadrillion'];
const englishLanguage = number => {
  if (typeof number !== 'number') {
    console.error('请输入数字');
    return '';
  }
  if (number === 0) return 'zero';
  let result = '';
  let leftArr = number.toString().split('').reverse();
  let arr = [];
  for (let i = 0; i < unit.length; i++) {
    let enNum = '';
    arr = leftArr.splice(0, 3).reverse();
    let cur = '';
    let and = 'and';
    if (arr.length === 3) {
      cur = arr.shift();
      if (cur !== 0) {
        enNum += fixedNumber[cur] + ' hundred ';
        and = '';
      }
    }
    if (arr.length === 2) {
      if (arr[0] === '0') {
        arr.shift();
      } else if (fixedNumber[arr[0] + arr[1]]) {
        enNum += fixedNumber[arr[0] + arr[1]];
        arr = [];
      } else {
        enNum += fixedNumber[arr[0] + '0'] + '-';
        arr.shift();
      }
    }
    if (arr.length === 1 && arr[0] !== '0') {
      enNum += fixedNumber[arr[0]];
    }
    result = enNum.trim() + ' ' + result.trim();
    if (leftArr.length === 0) {
      break;
    } else {
      result = result.trim() ? unit[i] + ', ' + and + ' ' + result : unit[i];
    }
  }
  result = result.trim().replaceAll('hundred ', 'hundred and ');
  return result;
};
export default englishLanguage;
