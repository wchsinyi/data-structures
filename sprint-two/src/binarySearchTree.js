var BinarySearchTree = function (value) {
  var t = {};
  t.value = value;
  t.right = null;
  t.left = null;

  t.insert = function (v) {
    var newV = BinarySearchTree(v);
    if (v > t.value) {
      // look to the right 
      if (t.right === null) {
        t.right = newV;
      } else {
        t.right.insert(v);
      }
    } else if (v < t.value) {
      // look to the left
      if (t.left === null) {
        t.left = newV;
      } else {
        t.left.insert(v);
      }
    }
  }

  t.contains = function (target) {
    if (t.value === target) {
      return true;
    } else if (target > t.value) {
      if (t.right !== null) {
        return t.right.contains(target);
      }
      return false;
    } else {
      if (t.left !== null) {
        return t.left.contains(target);
      }
      return false;
    }
  }

  t.depthFirstLog = function (cb) {
    cb(t.value);
    if (t.left !== null) {
      t.left.depthFirstLog(cb);
    }
    if (t.right !== null) {
      t.right.depthFirstLog(cb);
    }

  }

  return t;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var t = BinarySearchTree(1);

var arr = [14,3,7,4,5,15,6,13,10,11,2,12,8,9];
for (var i = 0; i < arr.length; i++) {
  t.insert(arr[i]);
}


// https://www.hackerrank.com/challenges/tree-inorder-traversal/problem
// https://leetcode.com/problems/binary-tree-inorder-traversal/