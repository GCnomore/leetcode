var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  } else if (p.val !== q.val) {
    return false;
  } else {
    // Return true if both left node comparison and right comparison returns true
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
