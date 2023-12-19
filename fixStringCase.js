// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// 
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// 
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!

function solve(s){
    let lowerCaseArr = s.split("").filter((e) => e === e.toLowerCase())
    let upperCaseArr = s.split("").filter((e) => e === e.toUpperCase())
    if(lowerCaseArr.length >= upperCaseArr.length) return s.toLowerCase()
    else return s.toUpperCase()
}


//ternary
function solve(s){
    let lowerCaseArr = s.split("").filter((e) => e === e.toLowerCase())
    let upperCaseArr = s.split("").filter((e) => e === e.toUpperCase())
    return lowerCaseArr.length >= upperCaseArr.length ? s.toLowerCase() : s.toUpperCase()
}

//counters
function solve(s) {
  let lowerCount = 0;
  let upperCount = 0;
  for (let char of s) {
    if (char.toLowerCase() === char) {
      lowerCount++;
    } else {
      upperCount++;
    }
  }
  if (lowerCount >= upperCount) return s.toLowerCase();
  else return s.toUpperCase();
}

//counters 2
function solve(s) {
  let lowerCount = 0;
  let upperCount = 0;
  for (let char of s) {
    char.toLowerCase() === char ? lowerCount++ : upperCount++;
  }
  return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}

//test
solve("CODe") //= "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.