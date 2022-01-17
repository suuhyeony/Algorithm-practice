// 첫번째 문자열이 두번째 문자열에 포함되어있으면 return true (순서는 맞아야 함)
// ex. 'abc', 'abracadabra' => true

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  if (i === str1.length) return true;
  return false;
}

// 솔루션 참고: while문을 다 돌고 정답을 확인하는게 아니라, 중간에 빠져나오기
while (j < str2.length) {
  if (str1[i] === str2[j]) {
    i++;
  }
  if (i === str1.length) return true;
  j++;
}

// 공간이 아닌 재귀
function isSubsequence(str1, str2) {
  // 더이상 비교할 str1이 없으면 다 비교한 것!
  if (str1.length === 0) return true;
  // 더이상 비교할 str2이 없으면 맞는 짝을 못찾은 것!
  if (str2.length === 0) return false;
  // 같은 글자를 찾았으면, 둘 다 앞을 지우고 재귀를 돌린다.
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  // 같은 글자를 못찾았다면, 모집단?인 str2를 하나 지우고 재귀를 돌린다.
  return isSubsequence(str1, str2.slice(1))
}
