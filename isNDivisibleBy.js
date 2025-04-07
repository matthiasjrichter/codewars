// https://www.codewars.com/kata/558ee8415872565824000007
//
// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
//
// Example:
//
// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7
//
// function isDivisible(){
//     //Write your code here
//   }

// simple for loop that returns false
// .every()

function isDivisible() {
  let arr = [...arguments];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] % arr[i]) return false;
  }
  return true;
}

// Rest paramaeters and skipping first element
function isDivisible(...args) {
  for (let i = 1; i < args.length; i++) {
    if (args[0] % args[i]) return false;
  }
  return true;
}

// Arrow function and .every()
const isDivisible = (...args) => args.every((e, _, a) => !(a[0] % e));

// Alternative
const isDivisible = (firstN, ...rest) => rest.every((e) => !(firstN % e));

// Tests
isDivisible(100, 5, 4, 10, 25, 20); // true
isDivisible(3, 3, 4); // false
