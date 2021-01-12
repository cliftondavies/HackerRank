// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    let lrd = [], rld = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i === j) {
                lrd.push(arr[i][j]);
                rld.push(arr[i][(arr.length) - (j + 1)]);
            }
        }
    }

    lrd = lrd.reduce((a, b) => a + b, 0);
    rld = rld.reduce((a, b) => a + b, 0);

    return Math.abs(lrd - rld);
}
