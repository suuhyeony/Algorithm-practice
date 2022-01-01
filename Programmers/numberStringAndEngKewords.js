// 2021 kakao 채용연계형 인턴십 - 숫자 문자열과 영단어 (https://programmers.co.kr/learn/challenges)

// 객체로 관리해 접근 쉽고 빠르게
const numConverter = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function solution(string) {
  let answer = "";
  let i = 0;
  while (i < string.length) {
    // 이미 숫자라면 그대로 숫자 사용
    if (!isNaN(string[i])) {
      answer += string[i];
      i++;
    } else {
      let j = 2;
      // 올바른 영단어가 될 때까지 slice
      while (!numConverter[string.slice(i, i + j)]) j++;
      answer += numConverter[string.slice(i, i + j)];
      // 다음 단어로 넘기기
      i += j;
      continue;
    }
  }

  return Number(answer);
}
