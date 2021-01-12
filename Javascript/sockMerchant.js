// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    let i = 0;
    let match = 0;
    ar = ar.sort((a, b) => a - b);
    while(i < n) {
        if(ar[i] === ar[i+1]) {
            match++;
            i += 2;
        } else {
            i += 1;
        }
    }
    return match;
}
