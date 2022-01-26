function findAllDuplicates(arr) {
  let answer = [];
  const lookup = {};
  for (const el of arr) {
    if (el in lookup) answer.push(el);
    lookup[el] = (lookup[el] || 0) + 1;
  }
  return answer;
}