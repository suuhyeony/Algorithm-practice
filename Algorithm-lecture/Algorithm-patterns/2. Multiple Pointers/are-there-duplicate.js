function areThereDuplicates(...arg) {
  const values = [...arg];
  let i = 0;
  while (i < values.length) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return true;
      }
    }
    i++;
  }
  return false;
}

// sort를 사용한 풀이 (시간복잡도: nlogn)
// 정렬하면 포인터를 좀더 효율적으로 사용할 수 있다.
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// one line 솔루션 (set을 사용하여 size와 기존 길이 비교)
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}