// https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
    //Create an array for all combination of prices Monica can afford
    let affordablePrices = [];
    
    //Calculate and filter out all affordable prices
    for(let i = 0; i < keyboards.length; i++) {
        for(let j = 0; j < drives.length; j++) {
            if((keyboards[i] + drives[j]) <= b) {
                affordablePrices.push(keyboards[i] + drives[j]);
            }
        }
    }
    
    //Print max amount Monica can spend
    return (affordablePrices.length >= 1) ? Math.max(...affordablePrices) : -1;
}
