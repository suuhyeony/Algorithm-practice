function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // 큰 값을 뒤로 보냄
      arr[j + 1] = arr[j];  
    }
    // 들어갈 자리를 찾으면, 현재 값을 넣어줌
    arr[j + 1] = currentVal; 
  }
  return arr;
}

// the wild west
function insertionSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
      currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  } else {
    let currentVal;
    for (let i = 1; i < arr.length; i++) {
      currentVal = arr[i];
      for (var j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
}