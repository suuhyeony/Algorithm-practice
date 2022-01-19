function capitalizeFirst(arr) {
  if (arr.length <= 0) return [];
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}

// 풀이 참고
// 뒤에서부터 시작. 직관적이지는 않아보임..
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [array[0][0].toUpperCase() + arr[0].substr(1)]
  }
  const res = capitalizeFirst(arr.slice(0, -1));
  const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
  res.push(string);
  return res;
}