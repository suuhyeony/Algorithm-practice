// (n, m) => n의 m제곱 구하기

function power(n, m) {
  if (m === 0) return 1;
  return n * power(n, m - 1)
}