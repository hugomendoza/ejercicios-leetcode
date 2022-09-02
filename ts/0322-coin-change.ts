function coinChange(coins: number[], amount: number): number {
  
  let counter:number[] = [];
  
  for (let i = 0; i < coins.length; i++) {
    const maxNumber:number = Math.max(...coins);
    const minNumber:number = Math.min(...coins);
    counter.push(maxNumber, minNumber)
    i++
    console.log(counter)
  }
};

coinChange([1,2,5], 11)