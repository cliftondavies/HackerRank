// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let r = '#'.repeat(i);
        console.log(r.padStart(n, ' '));
    }
}
