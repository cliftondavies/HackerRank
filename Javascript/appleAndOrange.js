// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let distance;
    let countApples = 0;

    for(let i = 0; i < apples.length; i++) {
        distance = a + apples[i];
        if (distance <= t && distance >=s) {
            countApples++;
        }
    }
    
    let distance2;
    let countOranges = 0;
    for(let j = 0; j < oranges.length; j++) {
        distance2 = b + oranges[j];
        if (distance2 <= t && distance2 >= s) {
            countOranges++;
        }
    }

    console.log(countApples);
    console.log(countOranges);
}
