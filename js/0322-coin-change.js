function coinChange(coins, amount) {
    var counter = [];
    for (var i = 0; i < coins.length; i++) {
        var maxNumber = Math.max.apply(Math, coins);
        var minNumber = Math.min.apply(Math, coins);
        counter.push(maxNumber, minNumber);
        i++;
        console.log(counter);
    }
}
;
coinChange([1, 2, 5], 11);
