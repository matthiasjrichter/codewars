// https://www.codewars.com/kata/64fc03a318692c1333ebc04c
//
// Task
// Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.
//
// Worked Example
// ("he headed to the store", "h", "e") ➞ True
//
// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True
//
// ('abcdee', 'e', 'e') ➞ False
//
// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False
// Examples
// ("i found an ounce with my hound", "o", "u") ➞ True
//
// ("we found your dynamite", "d", "y") ➞ False
// Notes
// All sentences will be given in lowercase.
//
//
// function bestFriend(txt, a, b) {
//     return false
//   }

//input is a string txt
//we are given a letter a and a letter b.
//find out if all occurences of a are followed by be
//return boolean
//split txt into array
//iterate through it and check
//return boolean

function bestFriend(txt, a, b) {
  let arr = [...txt];
  for (let i = 0; i <= arr.length; i++){
    if (arr[i] === a && arr[i + 1] !== b) return false
  }
  return true;
}

//.every()
const bestFriend = (txt, a, b) => [...txt].every((e, i, arr) => e !== a || arr[i + 1] === b);

//test
bestFriend("he headed to the store", "h", "e"); //true