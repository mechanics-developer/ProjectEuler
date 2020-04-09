//PROBLEM 3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

//*TODO: implement isPrime method
//*TODO: implement getFactors method
//*TODO: implement getPrimeFactors method 

//!My solution - very inefficient algorithm for big numbers, but works with smaller. (less then 100M)
// function isPrime(number)
//  { 
//    if (number <= 1)
//    return false;

//    // The check for the number 2 and 3
//    if (number <= 3)
//    return true;

//    if (number%2 == 0 || number%3 == 0)
//    return false;

//    for (var i=5; i*i<=number; i=i+6)
//    {
//       if (number%i == 0 || number%(i+2) == 0)
//       return false;
//    }

//    return true;
//  }

// function PrimeFactorFinder(y){

//   if(y%2===0)
//     z = y - 1;
//   else
//     z = y;

//   while(true){
//     if((isPrime(z) === true)&&(y%z==0))
//       return 'Largest prime factor is: '+z;
//     else  
//       z-=2;
//   }
  
// }
// //600851475143
// console.log(console.log(PrimeFactorFinder(600851475143)));

//!New Solution, implemented by Joe Begley Codes
//
// const getFactors = function(n) {
//   let factors = [];
//   for(var i =1; i<= Math.sqrt(n); i++){
//     if(n%i==0){
//       factors.push(i);
//       if(n/i != i){
//         factors.push(n/i);
//       }
//     }
//   }
//   return factors;
// }

// const isPrime = n => getFactors(n).length ==2;

// const getPrimeFactors = function(n) {
//   let factors = getFactors(n);
//   let greatestPrimeFactor = 1;
//   factors.map(function(factor){
//     if(factor > greatestPrimeFactor && isPrime(factor)){
//       greatestPrimeFactor = factor;
//     }
//   })
//   return greatestPrimeFactor;
// }

// console.log(getPrimeFactors(600851475143));

//!My Solution again

function isPrime(x){
  if(x <= 1)
    return false;

  if(x === 2)
    return true;

  for(let i = 2; i < x; i++){
    if(x%i==0)
      return false;
  }
  
  return true;
}

function isFactor(x,y){
  if(y%x===0)
    return true;

  return false;
}

function getLargestPrimeFactor(x){
  let arr = [];

  for(let i = 0; i < 10000; i++){
    if(isPrime(i) && isFactor(i,x)){
      console.log('Prime Factor: ' +i);
      arr.push(i);
    }
  }
  
  return arr[arr.length-1];
}

console.log(getLargestPrimeFactor(600851475143));