// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  if (n % 2 === 0) {
        n++;
    }
    
    if (p % 2 === 0) {
        p++;
    }
    
    let countFront = (p - 1) / 2;
    let countBack = (n - p) / 2;
    
    return (countFront > countBack) ? countBack : countFront;
}
