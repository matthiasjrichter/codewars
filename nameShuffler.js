// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
// Write a function that returns a string in which firstname is swapped with last name.
// 
// Example(Input --> Output)
// 
// "john McClane" --> "McClane john"

//parameters: strin with two words
//return. return it
//we take the string, convert it to an array, 

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
  }

//short
const nameShuffler = str => str.split(' ').reverse().join(' ')