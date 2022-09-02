function moveZeroes(nums: number[]): void {
  console.log(nums.sort((a:number, b:number) => {
    console.log({a, b})
    if(a !== 0 && b === 0) {
      return -1;
    }else if(a === 0 && b !== 0) {
      return 1
    } else {
      return 0
    }
  }))
};

moveZeroes([0,1,0,3,12]);
// [1,3,12,0,0]