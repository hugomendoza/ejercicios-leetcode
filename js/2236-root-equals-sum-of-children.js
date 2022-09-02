var checkTree = function(root) {
  for (let i = 0; i < root.length; i++) {
    return root[0] === (root[1] + root[2])
  }
};

checkTree([10,4,6]);