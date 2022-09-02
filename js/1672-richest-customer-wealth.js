var maximumWealth = function(accounts) {
  let maxWealth = 0;

  for (let i = 0; i < accounts.length; i++) {

    const wealth = accounts[i].reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    maxWealth = wealth > maxWealth ? wealth : maxWealth
  }

  return maxWealth;
};

maximumWealth([[2,8,7],[7,1,3]])