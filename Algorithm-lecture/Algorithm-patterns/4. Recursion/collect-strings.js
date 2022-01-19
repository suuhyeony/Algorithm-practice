function collectStrings(obj) {
  let answer = [];
  for (const val of Object.values(obj)) {
    if (typeof val === 'object') answer = answer.concat(collectStrings(val));
    if (typeof val === 'string') answer.push(val);
  }
  return answer;
}

// 헬퍼 메소드 재귀 버전
function collectStrings(obj) {
  let stringsArr = [];

  function gatherStrings(o) {
    for (const key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }
  gatherStrings(obj);
  return stringsArr;
}