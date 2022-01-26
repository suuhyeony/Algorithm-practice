// 주어진 숫자가 두 원소의 차인가?

function findPair(arr, diff) {
  const lookup = {};
  if (!arr.length) return false;
  for (const num of arr) {
    if (lookup[num]) continue;
    lookup[num] = [num + diff, num - diff];
  }
  for (const val of Object.values(lookup)) {
    if (arr.includes(val[0]) || arr.includes(val[1])) return true;
  }
  return false;
}