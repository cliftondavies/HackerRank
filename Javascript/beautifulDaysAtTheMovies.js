// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
    let result = [];
    let temp;
    while (i <= j) {
        temp = (Number(i.toString().split("").reverse().join("")));
        result.push((i - temp) / k);
        i++;
    }

    return result.filter((value) => Number.isInteger(value)).length;
}
