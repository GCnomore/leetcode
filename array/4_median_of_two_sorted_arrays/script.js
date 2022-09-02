var findMedianSortedArrays = function (nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log("merged", merged);
  if (merged.length % 2 === 0) {
    const mid = Math.floor(merged.length / 2) - 1;
    return (merged[mid] + merged[mid + 1]) / 2;
  } else {
    const mid = Math.floor(merged.length / 2);
    return merged[mid];
  }
};

console.log(findMedianSortedArrays([1, 2, 3], [3, 4]));
