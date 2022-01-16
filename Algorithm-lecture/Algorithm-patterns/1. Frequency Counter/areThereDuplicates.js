function areThereDuplicates(...arg) {
  const values = [...arg];
  const lookup = {};

  for (let val of values) {
    if (lookup[val]) return true;
    lookup[val] = 1
  }
  return false;
}