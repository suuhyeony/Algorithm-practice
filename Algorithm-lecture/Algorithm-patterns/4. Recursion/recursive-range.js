// 0 부터 해당 숫자까지의 합 구하기

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}