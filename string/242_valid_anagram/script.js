/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let result = true;

  const key1 = new Array(26).fill(0);
  const key2 = new Array(26).fill(0);

  s.split("").forEach((item) => {
    key1[item.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  });

  t.split("").forEach((item) => {
    key2[item.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  });

  console.log(key1);
  console.log(key2);

  key1.forEach((item, index) => {
    if (item !== key2[index]) {
      result = false;
    }
  });

  return result;
};

console.log(isAnagram("anagram", "nagwfewwaraaaaam"));
