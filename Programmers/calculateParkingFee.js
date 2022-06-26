// 2022 KAKAO BLIND 주차 요금 계산 https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  const [ baseTime, baseFee, mins, fee ] = fees;
  const answer = [];
  const data = {};

  // 차 번호를 key로 가지고, 입출차 시간을 값으로 가지는 data 생성
  records.forEach((record) => {
    const [ time, carNum ] = record.split(' ');
    if(!data[carNum]) {
      data[carNum] = [time];
    } else {
      data[carNum].push(time);
    }
  });
  
  for (const key of Object.keys(data).sort()) {
    const timeList = data[key];
    let totalTime = 0;
    let idx = 0;
    // timeList는 [입-출-입-..] 형식
    while(idx < timeList.length) {
      if (idx === timeList.length - 1) {
        // 홀수이면서 마지막 인덱스일 때
        totalTime += convertToMin('23:59') - convertToMin(timeList[idx]);
        break;
      }
      totalTime += convertToMin(timeList[idx + 1]) - convertToMin(timeList[idx]);
      idx += 2;   
    }
    answer.push(totalTime); 
  }
  return answer.map((usedTime) => usedTime < baseTime ? baseFee : baseFee + (Math.ceil((usedTime - baseTime) / mins)) * fee);
}

function convertToMin(str) {
  const [ hour, min ] = str.split(':');
  return Number(hour) * 60 + Number(min);
}