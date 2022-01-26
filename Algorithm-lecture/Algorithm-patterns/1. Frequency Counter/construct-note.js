// 두번째 인자로 첫번째 인자를 만들 수 있는가?

function constructNote(message, letters) {
  const lookup = {};
  for (const letter of letters) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }
  for (let i = 0; i < message.length; i++) {
    if (!(message[i] in lookup) || lookup[message[i]] === 0) return false;
    lookup[message[i]] -= 1;
  }
  return true;
}