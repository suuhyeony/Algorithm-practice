// 푸는중...
class Trie {
  constructor() {
      this.characters = {};
      this.isWord = false;
  }
  addWord(word, index = 0) {
      if (index >= word.length) {
        return { characters: {}, isWord: true };
      }
      if (word && index === 0) {
        this.isWord = true;
        this.characters[word[index]] = {}
        this.characters[word[index]].isWord = true;
        this.characters[word[index]] = this.addWord(word, index + 1);
      } else {
        if (!this.characters[word[index - 1]].isWord) {
            // this.characters[word[index - 1]].isWord = true;
            this.characters[word[index - 1]] = this.addWord(word, index + 1);
        }
      }
      return this;
  }
}

const t = new Trie();
console.log(t.addWord('has'));