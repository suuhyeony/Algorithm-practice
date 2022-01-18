// 모든 원소의 곱

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  const target = arr.shift();
  return target * productOfArray(arr);
}

// 풀이 참고: arr.slice(1) 하면 맨 앞의 원소를 자름 (원본 해치지x)
return arr[0] * productOfArray(arr.slice(1))