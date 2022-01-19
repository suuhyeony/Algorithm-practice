// 하나라도 조건을 만족하는 원소가 있다면 return true

function someRecursive(arr, condition) {
  if (arr.length === 1) return condition(arr[0]);
  return condition(arr[0]) || someRecursive(arr.slice(1), condition);
}

// 풀이 참고
// 이게 재귀를 덜 돌고 더 빨리 리턴되긴 할 듯
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}