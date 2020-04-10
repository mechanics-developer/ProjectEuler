//PROBLEM 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//BruteForce Method implemented by me
function isEvenlyDivisible(x){

  let condition = false;

  for(let i = 20; i > 0; i--){
    
    if(x%i !== 0)
      return false;
  }

  return true
}

isEvenlyDivisible()

for(let i = 20; ;i+=20){
  if(isEvenlyDivisible(i)){
    console.log("Found smallest divisible number: "+i);
    break;
  }
  else
    console.log(i);
}

// Let's go through some basic rules:

// Everything is divisible by 1.
// If something is divisible by 16, then it's divisible by 2, 4, and 8.
// If something is divisible by 9, then it's divisible by 3.
// If something is divisible by both 16 and 9, then it's divisible by 6, 12, and 18.
// If something is divisible by both 16 and 5, then it's divisible by 10 and 20.
// If something is divisible by both 16 and 7, then it's divisible by 14.
// If something is divisible by both 9 and 5, then it's divisible by 15.
// That leaves: 5, 7, 9, 11, 13, 16, 17, 19. Multiply those together and you get

// 232,792,560

