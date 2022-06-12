// 2022 KAKAO BLIND 신고 결과 받기 (https://programmers.co.kr/learn/courses/30/lessons/92334)

// 개선한 풀이
function solution(userList, reportList, maxCount) {
  let answer = new Array(userList.length).fill(0);
  // 중복을 없앨 땐 set 사용하기!
  let filteredReports = [...new Set(reportList)].map(report => report.split(' '));
  
  let reportedCounts = {};
  filteredReports.map(report => {
    // 신고당한 카운트 저장
    reportedCounts[report[1]] = reportedCounts[report[1]] + 1 || 1;
  });
  
  filteredReports.map(report => {
    if (reportedCounts[report[1]] >= maxCount) {
      // 신고 결과 카운트 저장
      answer[userList.indexOf(report[0])] += 1;
    }
  })
  
  return answer;
}


// 이전 풀이
function solution(userList, reportList, maxCount) {
  let answer = new Array(userList.length).fill(0);
  let reportedUserList = {};

  userList.map((user) => {
    reportedUserList[user] = [];
  });

  // 신고 당한 유저: [ '신고한 유저1', '신고한 유저2' ] 형식으로 저장
  reportList.map((report) => {
    const [reportUser, reportedUser] = report.split(' ');
    if (!reportedUserList[reportedUser].includes(reportUser)) {
      reportedUserList[reportedUser].push(reportUser);
    }
  });

  for (const reportedUser in reportedUserList) {
    if (reportedUserList[reportedUser].length >= maxCount) {
      // 나를 신고한 유저의 answer count를 +1 
      reportedUserList[reportedUser].map((reporter) => {
        answer[userList.indexOf(reporter)] += 1;
      })
    }
  }
  
  return answer;
}
