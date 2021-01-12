// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    let min = arr.reduce((a, b) => a + b, 0) - Math.max(...arr);
    let max = arr.reduce((a, b) => a + b, 0) - Math.min(...arr);
    console.log(`${min} ${max}`);
}
