// 주어진 배열의 연속된 원소 중, 합쳐서 타겟 넘버가 나올 수 있는 최소한의 숫자 개수
// 단, 타겟 넘버보다 더 큰 원소가 있다면 1을 리턴.
// 합쳐서 타겟 넘버가 나올 수 없다면 0을 리턴.
// ex. [2, 1, 6, 5, 4], 9 => 2

function minSubArrayLen(arr, num) {
  if (arr.length === 0) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return 1;
  }

  let left = 0;
  let right = 1;
  let answer = Infinity;
  while (right < arr.length) {
    const targetNums = arr.slice(left, right + 1);
    const sum = targetNums.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    if (sum === num || sum > num) {
      answer = Math.min(answer, right - left + 1);
      left++;
    }
    if (sum < num) right++;
  }
  if (answer !== Infinity) return answer;
  return 0;
}

// 풀이 참고 : 전체적인 틀은 비슷.
// 먼저 total에 더하기 전에 크기 비교를 하면, 더 효율적임.
// 굳이 배열을 새로 만들어 합하지 말고, 원소를 바로바로 더하거나 빼서 비교 가능

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}