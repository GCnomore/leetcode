/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
  const result = [];

  //   loop from back because I need to compare with words[i - 1]
  for (let i = words.length - 1; i > -1; i--) {
    if (!isAnagram(i)) {
      // since looping from back, using unshift to keep in order
      result.unshift(words[i]);
    }
  }

  //   helper function to compare two strings
  function isAnagram(index) {
    if (index === 0) return false;
    const key1 = new Array(26).fill(0);
    const key2 = new Array(26).fill(0);
    let result = true;

    words[index].split("").forEach((item) => {
      key1[item.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    });

    words[index - 1].split("").forEach((item) => {
      key2[item.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    });

    key1.forEach((item, index) => {
      if (item !== key2[index]) {
        result = false;
      }
    });

    return result;
  }

  return result;
};

console.log(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]));
