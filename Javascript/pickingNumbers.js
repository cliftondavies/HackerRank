// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  let arr = [];
  let arr1 = [];
  let maxLength = 0;
  let finalMaxLength = 0;
  
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a.length; j++) {
      if(a[i]+1 == a[j] || a[i] == a[j]) {
          arr.push(a[i]);
      } else if(a[j] == a[i] || a[j] == a[i] - 1) {
          arr1.push(a[i]);
      }
    }
    
    if(arr.length > arr1.length) {
        maxLength = arr.length;
    } else {
        maxLength = arr1.length;
    }
    
    if (finalMaxLength < maxLength) {
        finalMaxLength = maxLength;
    }
    
    arr = [];
    arr1 = [];
  }
  return finalMaxLength;
}
