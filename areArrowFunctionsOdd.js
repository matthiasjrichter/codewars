// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5
//
// Time to test your basic knowledge in functions! Return the odds from a list:
//
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []
//
// function odds(values){
//     // arrow it
//     return values.filter( => );
//   }

function odds(values) {
  return values.filter((e) => e % 2 !== 0);
}

//more arrows!
const odds = (values) => values.filter((e) => e % 2 !== 0);

//tests
odds([1, 2, 3, 4, 5]); //[1, 3, 5]
odds([2, 4, 6]); //[]
