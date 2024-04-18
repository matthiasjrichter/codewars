// https://www.codewars.com/kata/57d1f36705c186d018000813
// 
// 
// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
// 
// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
// 
// Rules:
// 
// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
// 
// function gordon(a){
// }

//all uppercase
//aA -> @
//eiouEIOU -> *
//add !!!! to word end

function gordon(a) {
  let array = a
    .toUpperCase()
    .replace(/A/g, "@")
    .replace(/[EIOU]/g, "*")
    .split(" ");
  return array.map((e) => e + "!!!!").join(" ");
}

//one line for fun
const gordon = (a) => a.toUpperCase().replace(/A/g, "@").replace(/[EIOU]/g, "*").split(" ").map((e) => e + "!!!!").join(" ");

//test
gordon('i am a chef') // '*!!!! @M!!!! @!!!! CH*F!!!!'