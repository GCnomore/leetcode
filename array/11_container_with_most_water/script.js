var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  //  Loop all possible result
  while (left < right) {
    const width = right - left;
    // Height should be min among left and right
    result = Math.max(result, width * Math.min(height[left], height[right]));

    // Move pointer with smaller value towards middle
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
