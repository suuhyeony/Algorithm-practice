function solution(fees, records) {
  const [ baseTime, baseFee, mins, fee ] = fees;
  const answer = [];
  const data = {};
  
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
    while(idx < timeList.length) {
      if (idx === timeList.length - 1) {
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