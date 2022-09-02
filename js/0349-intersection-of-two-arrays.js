var intersection = function(nums1, nums2) {
  
  const result = []
  
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if(nums1[i] === nums2[j]) {
        result.push(nums1[i])
      }
    }
  }

  return uniqueChars = [...new Set(result)]

  // var n = nums1.filter((r)=>nums2.includes(r))
  // return [...new Set(n)]
  

};

intersection(nums1 = [1,2,2,1], nums2 = [2,2]);