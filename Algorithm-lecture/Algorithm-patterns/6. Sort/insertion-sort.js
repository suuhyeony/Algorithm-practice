function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // 큰 값을 뒤로 보냄
      arr[j + 1] = arr[j];  
    }
    // 들어갈 자리를 찾으면, 현재 값을 넣어줌
    arr[j + 1] = currentVal; 
  }
  return arr;
}