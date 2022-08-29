/*
 Given an integer n, return the least number of perfect square numbers that sum to n.
 A perfect square is an integer that is the square of an integer; in other words, 
 it is the product of some integer with itself. 
 For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 */

var numSquares = function (n) {
  /* 
    Create DP array filled with -1.
    *Length of n + 1 to match array index with length.
      *Need to loop until n becomes zero.
      *If not n + 1, loop will stop at n = 1.
  */
  const dp = new Array(n + 1);
  dp.fill(-1);
  return getResult(n, dp);
};

function getResult(n, dp) {
  /* 
    If the recursion visited the remaining n,
    return the number of steps it took to get to the n.
  */
  if (dp[n] != -1) return dp[n];

  /*
    If n is 0, return 0 and increase the step count by 1.
  */
  if (n === 0) return 0;
  let min = Number.MAX_SAFE_INTEGER;

  // Loop until largest valid square number
  for (let i = 1; i * i <= n; i++) {
    /* 
      Subtract n by valid square numbers.
      Calls itself and stacks getResult into the call stack until n becomes 0 per iteration.
      When n = 0, as per last in first out, resolves the n = 0 which will make curr = 1.
   */
    const curr = getResult(n - i * i, dp) + 1;
    min = Math.min(min, curr);
  }
  dp[n] = min;
  console.log(dp, n);
  return min;
}

console.log(numSquares(4));
