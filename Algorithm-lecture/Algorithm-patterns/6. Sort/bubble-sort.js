// default bubbleSort
function bubbleSort(arr) {
  let isSwap;
  for (let i = arr.length; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

// the wild west
function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    let isSwap;
    for (let i = arr.length; i > 0; i--) {
      isSwap = false;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          isSwap = true;
        }
      }
      if (!isSwap) break;
    }
    return arr;
  } else {
    let isSwap;
    for (let i = arr.length; i > 0; i--) {
      isSwap = false;
      for (let j = 0; j < i - 1; j++) {
        if (comparator(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          isSwap = true;
        }
      }
      if (!isSwap) break;
    }
    return arr;
  }
}