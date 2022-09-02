function addDigits(num) {
    // const arrayNum = String(num);
    // let finalResult:number = 0;
    // for (let i = 0; i < arrayNum.length; i++) {
    //   const currentValue:number = Number(arrayNum[i]);
    //   let nextValue = 0
    //   if(arrayNum.length > 2) {
    //     nextValue  = Number(arrayNum[i + 1]);
    //   }
    //   const totalSum:number = currentValue + nextValue;
    //   console.log({nextValue})
    //   if(totalSum >= 10 ) {
    //     const arrayTotalSum = String(totalSum);
    //     for (let j = 0; j < arrayTotalSum.length; j++) {
    //       const currentVal = Number(arrayTotalSum[j]);
    //       const currentValNext = Number(arrayTotalSum[j + 1]);
    //       finalResult = currentVal + currentValNext;
    //       j++
    //     }
    //   } else {
    //     finalResult = totalSum
    //   }
    //   i++
    // }
    // return finalResult
    if (num) {
        return num % 9 || 9;
    }
    else {
        return 0;
    }
    console.log(num % 9 || 9);
    return num ? num % 9 || 9 : 0;
}
;
addDigits(36);
