// https://www.codewars.com/kata/53697be005f803751e0015aa/javascript
//
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
// For example, decode("h3 th2r2") would return "hi there".
//
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
//
// function encode(string) {
//     return
//   }
//
//   function decode(string) {
//     return
//   }

function encode(string) {
    return  string.replaceAll("a", "1").replaceAll("e", "2").replaceAll("i", "3").replaceAll("o", "4").replaceAll("u", "5");
}

function decode(string) {
    return  string.replaceAll("1", "a").replaceAll("2", "e").replaceAll("3", "i").replaceAll("4", "o").replaceAll("5", "u");
}
