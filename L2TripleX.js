// https://www.codewars.com/kata/568dc69683322417eb00002c/
//
// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
//
// "abraxxxas" → true
// "xoxotrololololololoxxx" → false
// "softX kitty, warm kitty, xxxxx" → true
// "softx kitty, warm kitty, xxxxx" → false
// Note :
//
// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false
//

// simple arrow function
const tripleX = (str) => str.indexOf("x") === str.indexOf("xxx") && str.indexOf("x") !== -1;

// storing str.indexOf("x") in a const
const tripleX = (str) => {
  const firstX = str.indexOf("x");
  return firstX === str.indexOf("xxx") && firstX !== -1;
};

// just being clever here and having fun. Not recommended for production.
const tripleX = (str, firstX = str.indexOf("x")) => firstX === str.indexOf("xxx") && firstX !== -1;