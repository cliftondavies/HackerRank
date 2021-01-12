// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    var p = (arr.filter(n => n > 0).length / arr.length).toFixed(6);
    var z = (arr.filter(n => n === 0).length / arr.length).toFixed(6);
    var n = (arr.filter(n => n < 0).length / arr.length).toFixed(6);
    console.log(p);
    console.log(n);
    console.log(z);
}
