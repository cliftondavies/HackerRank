// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
    let max = ar.reduce((a, b) => Math.max(a, b));
    return ar.filter(h => h === max).length;
}
