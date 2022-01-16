// 첫번 째 배열의 모든 원소에 대해, 각 원소를 제곱한 값이 두번째 배열에 들어있다면 true를 리턴.
// ex. [1, 2, 3] [4, 9, 1] => true

function same(arr1, arr2) {
  // 배열의 길이가 같지 않다면 얼리리턴 (엣지 케이스)
  if (arr1.length !== arr2.length) {
    return false;
  }

  // frequencyCounter 객체 생성 및 빈도 수 카운트
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of frequencyCounter1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of frequencyCounter2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // 첫번째 객체의 key로 존재여부 및 빈도 수 확인
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}