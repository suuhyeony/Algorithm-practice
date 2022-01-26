// 주어진 숫자가 두 원소의 차인가?

function findPair(arr, diff) {
  if (!arr.length) return false;
  if (diff > 0) {
    arr.sort((a, b) => a - b);
  } else {
    arr.sort((a, b) => b - a);
  }
  
  let i = 0;
  let j = 1;
  while (i < j) {
    if (arr[j] - arr[i] === diff) return true;
    
    if (arr[j] - arr[i] < diff) {
      j++;
    } else {
      i++;
    }
  }
  return false;
}