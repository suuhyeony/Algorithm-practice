// n 번째에 해당하는 피보나치 수열의 값 찾기
// ex. 피보나치 수열 = 1, 1, 2, 3, 5, 8, ...

function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2)
}

// 풀이 참고: 조건 수정
if (n <= 2) return 1;