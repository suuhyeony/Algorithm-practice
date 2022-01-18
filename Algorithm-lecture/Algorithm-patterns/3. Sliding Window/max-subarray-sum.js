// 서로 인접해 있는 n개의 숫자 합 중 가장 큰 것 출력하기
// ex. [4, 2, 1, 6, 2], 4 => 13

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  
  let maxSum = 0;
  let tempSum = 0;
  
  // 창문 만들기
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // 왼쪽 창문 닫고, 오른쪽 창문 열기
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}