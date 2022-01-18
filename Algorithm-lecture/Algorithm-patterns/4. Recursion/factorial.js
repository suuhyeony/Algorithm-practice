function factorial(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

// 참고: 조건 수정
if (x < 0) return 0;
if (x <= 1) return 1;