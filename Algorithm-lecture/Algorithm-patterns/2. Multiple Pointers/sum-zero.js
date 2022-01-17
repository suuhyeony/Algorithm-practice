// 정렬된 배열의 원소들 중 합이 0이 되는 원소들 찾기
// ex. [-3, -2, 0, 1, 3, 4] => [-3, 3]

function sumZero(arr) {
  // left는 인덱스 0부터, right는 마지막 인덱스부터 시작
  let left = 0;
  let right = arr.length - 1;

  // 포인터를 좁혀나가다 겹치는 순간, 다 확인했다는 의미
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    // 합이 양수면 오른쪽 포인터를 작은 쪽으로 이동
    } else if (sum > 0) {  
      right--;
    // 합이 음수면 왼쪽 포인터를 큰 쪽으로 이동
    } else {
      left++;
    }
  }
}