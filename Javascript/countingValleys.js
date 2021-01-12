// https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
    let alt = 0; //altitude
    let arr = [0]; //unit altitude at each step
    for(let i = 0; i < n; i++) {
        if(s[i] === "D") {
            alt--;
            arr.push(alt);
        } else {
            alt++;
            arr.push(alt);
        }
    }
    let val = 0; //number of valleys walked
    for(let j = 0; j < arr.length; j++) {
        if(arr[j] === 0 && arr[j+1] === -1) {
            val += 0.5;
        } else if(arr[j] === -1 && arr[j+1] === 0) {
            val += 0.5;
        }
    }
    return val;
}
