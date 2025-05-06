// https://www.codewars.com/kata/57f7b8271e3d9283300000b4
//
// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
//
// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
//
// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
//
// If the total of both even and odd numbers are identical return: "Even and Odd are the same"
//
// function evenOrOdd(str) {
//
// }
function evenOrOdd(str) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < str.length; i++) {
    let current = +str[i];
    if (current % 2 === 0) evenSum += current;
    else oddSum += current;
  }
  if (evenSum > oddSum) return "Even is greater than Odd";
  if (evenSum < oddSum) return "Odd is greater than Even";
  return "Even and Odd are the same";
}
