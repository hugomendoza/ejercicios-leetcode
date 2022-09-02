function kidsWithCandies(candies, extraCandies) {
  const result = [];
  const candiesMax = Math.max(...candies);
  for(let i = 0; i < candies.length; i++) {
      const candiesQuantity = candies[i] + extraCandies;
      if( candiesQuantity >= candiesMax) {
          result.push(true);
      } else {
          result.push(false);
      }
  }
  return result;
};

kidsWithCandies(candies = [2,3,5,1,3], extraCandies = 3)