// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    let i = 0;
    let stepCount = 0;

    while (i < c.length) {
        if(c[i] === 0 && c[i+2] === 0) {
            stepCount++;
            i += 2;
        } else if(c[i] === 0 && c[i+1] === 0) {
            stepCount++;
            i++;
        } else {
            i++;
        }
    }
    return stepCount;
}
