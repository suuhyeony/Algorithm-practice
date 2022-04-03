// 스트링에 사용할 수 있는 기본 해시 함수
function hash(key, arrayLen) {
  let total = 0;
  // 데이터를 저장하는 배열의 길이가 소수일 경우, 충돌이 일어날 확률이 적다
  let WEIRD_PRIME = 31;
  // 루프를 돌 데이터의 maximum을 100자로 설정
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  } 
  return total;
}