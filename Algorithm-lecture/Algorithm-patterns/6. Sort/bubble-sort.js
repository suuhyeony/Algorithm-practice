// default bubbleSort
function bubbleSort(arr) {
  let isSwap;
  // 비교하는 횟수를 줄여나가기 위해 뒤에서부터 루프 시작
  for (let i = arr.length; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }
    // 지난번에도 자리를 바꾸지 않았다면, 굳이 확인할 필요가 없다. (최적화)
    if (!isSwap) break;
  }
  return arr;
}

// the wild west
function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
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
