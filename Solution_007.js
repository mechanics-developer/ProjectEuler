//PROBLEM 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function isPrime(x){
  if(x <= 1)
    return false;
  if(x === 2)
    return true;

  for(let i = 2; i < x; i++){
    if(x%i===0)
      return false;
  }
  return true;
}

function getNthPrime(x){
  let foundedPrimes = 0;

  for(let i = 0; ;i++){
    if(isPrime(i)){
      foundedPrimes++;

      if(foundedPrimes === x)
        return i;
    }
  }
}


console.log(getNthPrime(10001));