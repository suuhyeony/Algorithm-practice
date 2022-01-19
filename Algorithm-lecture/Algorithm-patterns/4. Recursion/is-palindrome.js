function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

// 풀이 참고
// 결국 풀이는 동일하나, slice를 더 잘쓴 쪽은 이쪽인 듯..
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}