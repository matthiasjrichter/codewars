// https://www.codewars.com/kata/59bc0059bf10a498a6000025
//
// I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.
//
// Example:
//
// stringOne = 'bubble gum';
// stringTwo = 'turtle ham';
//
// Result:
// bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham
//
// function mutateMyStrings(stringOne, stringTwo){
//
// }

//for of loop
//have a counter
//change string by replacing current char with stringTwo[count], increase count by one, result += stringOne + \n
//write test

function mutateMyStrings(stringOne, stringTwo) {
  let result = stringOne + "\n";
  let newString = stringOne.split("");

  for (let i = 0; i < stringOne.length; i++) {
    if (newString[i] !== stringTwo[i]) {
      newString[i] = stringTwo[i];
      result += newString.join("") + "\n";
    }
  }

  return result;
}

//test
mutateMyStrings("bubble gum", "turtle ham"); // bubble gum
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham
//
