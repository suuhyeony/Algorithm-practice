// pivot helper
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// quick sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left subArray
    quickSort(arr, left, pivotIndex - 1);
    // right subArray
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// the wild west
// 50. sorting exercise - pivot helper
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  const pivot = arr[start];
  let swapIdx = start;

  if (typeof comparator !== 'function') {
    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  } else {
    for (let i = start + 1; i < arr.length; i++) {
      if (comparator(pivot, arr[i]) > 0) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  }
}

// 51. sorting exercise - quick sort
function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, comparator, left, right);
    // left subArray
    quickSort(arr, comparator, left, pivotIndex - 1);
    // right subArray
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}