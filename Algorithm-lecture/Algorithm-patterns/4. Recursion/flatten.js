// 모든 배열을 flat하게 만들어 리턴하기

function flatten(arr) {
  if (!arr.length) return [];
  if (typeof arr[0] === 'number') return [arr[0], ...flatten(arr.slice(1))];
  return flatten([...arr[0], ...arr.slice(1)]);
}


// 풀이 참고
// 문제에서는 원소의 예시가 number였지만, 확장성을 따지면 isArray로 따지는게 나아 보인다.
function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}