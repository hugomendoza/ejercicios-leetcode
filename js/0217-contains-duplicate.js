var containsDuplicate = function(nums) {

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;

  return new Set(nums).size !== nums.length;
  const uniqueSet = new Set(nums) 
  return uniqueSet.size !== nums.length 

};

containsDuplicate([1,1,1,3,3,4,3,2,4,2])