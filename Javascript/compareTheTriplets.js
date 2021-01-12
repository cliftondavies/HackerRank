// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
    let aP = 0; let bP = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) { aP += 1; }
        else if (b[i] > a[i]) { bP += 1; }
    }
    return [aP, bP];
}
