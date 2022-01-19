function reverse(str) {
  let answer = str[str.length - 1];
  if (str.length === 1) {
    return answer;
  } 
  answer = answer.concat(reverse(str.slice(0, str.length - 1)));
  return answer;
}

// 풀이 참고
// 반환값의 재귀 함수의 위치에 따라 역순으로도 표현 가능!!
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}