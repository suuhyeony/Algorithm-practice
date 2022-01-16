// 유효한 anagram이면 true를 리턴.
// ex. 'awesome', 'awesom' => false

function validAnagram(str1, str2) {
  // 문자열 길이가 다르면 얼리리턴
  if (str1.length !== str2.length) return false;

  // frequencyCounter 객체 생성 및 빈도 카운트
  const frequencyCounter = {};
  for (let letter of str1) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }

  // 두번째 문자열을 돌면서
  for (let letter of str2) {
    // 해당 key가 없으면 return false
    if (!(letter in frequencyCounter)) return false;
    // 문자열을 다 돌지 않았는데 카운트가 0이면 return false
    if (!frequencyCounter[letter]) return false;
    // 해당 key 값 -1
    frequencyCounter[letter] -= 1;
  }
  
  return true;
}

// 1번째 시도: str2에 대해서도 frequencyCounter를 만들었음.

// 2번째 시도: anagram 특성상 frequencyCounter를 하나만 만들어도 된다는 것을 깨달음.
// str2 문자열을 다 돌고나서 추가로 forEach문을 돌며 key값이 0이 아니면 return false 하는 로직을 썼는데, (세 개의 for문)

// 3번째 시도: str2 문자열을 도는 중에 이미 카운트가 0이 되었다면 유효한 anagram이 아니라는 로직 추가 후 위의 로직 제거 (두 개의 for문)