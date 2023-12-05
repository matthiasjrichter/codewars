// https://www.codewars.com/kata/57cff961eca260b71900008f
//
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//
// If they are, change the array value to a string of that vowel.
//
// Return the resulting array.
//
// function isVow(a){
//
// }
///////////////////

// 97 -> "a", 101 -> "e", 105 -> "i", 111 -> "o", 117 -> "u"

function isVow(a) {
  return a.map((e) => {
    if (e === 97) return "a";
    if (e === 101) return "e";
    if (e === 105) return "i";
    if (e === 111) return "o";
    if (e === 117) return "u";
    return e;
  });
}

//switch
function isVow(a) {
    return a.map((e) => {
        switch (e) {
            case 97: return "a";
            case 101: return "e";
            case 105: return "i";
            case 111: return "o";
            case 117: return "u";
            default: return e;
          }
    });
}

//lookup table and ternary
function isVow(a) {
    let vowels = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
    return a.map((e) => (e in vowels ? vowels[e] : e));
  }
  
//object outside for reuse and arrow function
const vowelCodes = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
const isVow = (a) => a.map((e) => vowelCodes[e] || e);

//test
isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]); //["e",121,110,113,113,103,121,121,"e",107,103]
