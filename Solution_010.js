// Problem 10 - Summation of primeArray

// The sum of the primeArray below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primeArray below two million.

function getPrimes(n){
  let primeArray = [];

  for(let i = 0; i < n; i++){
    primeArray.push(true);
  }
  
  for(let p = 2; p*p <= n; p++){
    if(primeArray[p] === true){
      for(let i = p*p; i < n; i+=p){
        primeArray[i]=false;
      }
    }
  } 

  return primeArray;
}

function returnSumPrimes(n,primeArray){
  
  let sum = 0;

  for(let i = 2; i < n; i++){
    if(primeArray[i]===true)
      sum+=i;
  }

  return sum;
}

let n = 2000000;
let primeArray = getPrimes(n);
console.log(returnSumPrimes(n,primeArray));

