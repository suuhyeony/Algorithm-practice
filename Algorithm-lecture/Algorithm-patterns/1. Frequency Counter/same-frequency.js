function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) return false;

  const lookup = {};
  for (let letter of str1) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let letter of str2) {
    if (!(letter in lookup)) return false;
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }
  return true;
}