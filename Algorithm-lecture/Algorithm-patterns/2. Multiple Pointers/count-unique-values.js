// 정렬된 배열에서 유니크한 원소의 개수를 리턴.
// ex. [-2, -1, -1, 0, 1] => 4

function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}