// 의사코드 기반으로 연습
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let middle = Math.ceil((left + right) / 2);
    if (arr[middle] === val) return middle;
    arr[middle] > val ? (right = middle) : (left = middle);
  }
  return -1;
}

// 답변
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
