function stringifyNumbers(obj) {
  let newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'object') newObj[key] = Object.assign(obj[key], stringifyNumbers(obj[key]));
    if (typeof val === 'number') newObj[key] = String(val);
    else newObj[key] = val;
  }
  return newObj;
}

// 코드 오류 수정
// array는 typeof 찍으면 object로 나와서 조건을 추가해주어야 함
// if else 구문 잘못써서 쓸데없이 Object.assign을 사용해버림;;
function stringifyNumbers(obj) {
  let newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'object' && !Array.isArray(obj[key])) newObj[key] = stringifyNumbers(obj[key]);
    else if (typeof val === 'number') newObj[key] = String(val);
    else newObj[key] = val;
  }
  return newObj;
}