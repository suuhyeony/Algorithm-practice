// 정렬된 배열의 두 원소로, 주어진 평균 값을 낼 수 있는지
// ex. [1, 2, 3], 2.5 => true

function averagePair(arr, averageNum) {
  const sum = averageNum * 2;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === sum) return true;
    if (arr[i] + arr[j] < sum) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}