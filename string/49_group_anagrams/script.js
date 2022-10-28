/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Solution using hash map
var groupAnagrams = function (strs) {
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    // mak an array filled with 0 legnth of alphabets
    let count = new Array(26).fill(0);
    const toList = strs[i].split("");

    for (let ii = 0; ii < toList.length; ii++) {
      /**
       * This will map a-z into count array by converting string into ascii
       * ascii 'a' - 'a' will be zero so 'a' will be placed on zero index
       * 'z' - 'a' will place 'z' to 25 index
       * increase the value of the indexes by 1 and that will be the key for the hash map
       */
      count[toList[ii].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    /**
     * Check if the key exists and push the string accordingly
     */
    if (!obj[count]) {
      obj[count] = [strs[i]];
    } else {
      obj[count].push(strs[i]);
    }
  }
  return Object.values(obj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
