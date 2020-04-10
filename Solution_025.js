// 1000-digit Fibonacci number
   
// Problem 25
// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

let current;
let temp;
let past1;
let past2;
let index = 2;

function fibonacci(past1,past2,current){

  temp = current;
  current += past2;
  index++;

  var len = Math.ceil(Math.log10(current+1));

  console.log('Number: ' +current);
  console.log('Length: ' +len);
  console.log('Index: ' +index);

  if(len < 1000)
   fibonacci(past2,temp,current);

  if(len === 1000)
    return index;
}

console.log(fibonacci(0,1,1));
