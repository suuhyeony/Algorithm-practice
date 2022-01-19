function nestedEvenSum(obj) {
  let answer = 0;
  if (!Object.values(obj).length) return 0;
  for (const val of Object.values(obj)) {
    if (typeof val === 'object') answer += nestedEvenSum(val);
    if (val % 2 === 0) answer += val;
  }
  return answer;
}

// 풀이 참고
// 거의 비슷하지만 obj 자체를 돌면서, 한 줄 줄일 수 있음.
// val가 다른 타입일 수도 있다고 생각해서 조건 추가하기.
function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}