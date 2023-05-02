// 2022 KAKAO TECH INTERNSHIP 성격 유형 검사하기 https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

function solution(survey, choices) {
  // 각 유형의 점수를 담을 객체
  const scoreOfTypes = {};
  // 성격 유형 지표 리스트
  const typeList = ['RT', 'CF', 'JM', 'AN'];
  let answer = [];
  
  // 유형별 점수 초기화
  typeList.forEach((type) => {
    scoreOfTypes[type[0]] = 0;
    scoreOfTypes[type[1]] = 0;
  });
  
  // choices 리스트를 돌며 survey 리스트 확인 후 타입별 점수를 매긴다.
  choices.forEach((choice, idx) => {
    // * point: iterable한 구조에서 비구조화 할당 활용하기
    const [typeForDisagree, typeForAgree] = survey[idx];
    // * point: 기준점(4)을 보고 절대값 활용학기
    scoreOfTypes[choice < 4 ? typeForDisagree : typeForAgree] += Math.abs(choice - 4);
  });
  
  // 최종 성격유형 체크
  typeList.forEach((type) => {
    const firstTypeScore = scoreOfTypes[type[0]];
    const secondTypeScore = scoreOfTypes[type[1]];
    
    if (firstTypeScore >= secondTypeScore) {
      answer.push(type[0]);
    } else {
      answer.push(type[1]);
    }
  });
  
  return answer.join('');
}