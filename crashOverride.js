// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
//
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
//
// Your task is to create a function that, given a proper first and last name, will return the correct alias.
//
// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
//
// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
//
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
//
// Examples
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
//
// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!
//
// function aliasGen(){
//     // Code Here
// }

let firstName = {A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', E: 'Energy', F: 'Function', G: 'Glitch', H: 'Half-life', I: 'Ice', J: 'Java', K: 'Keystroke', L: 'Logic', M: 'Malware', N: 'Nagware', O: 'OS', P: 'Phishing', Q: 'Quantum', R: 'RAD', S: 'Strike', T: 'Trojan', U: 'Ultraviolet', V: 'Vanilla', W: 'WiFi', X: 'Xerox', Y: 'Y', Z: 'Zero'}

let surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Discharge', E: 'Electron', F: 'Faraday', G: 'Gig', H: 'Hacker', I: 'IP', J: 'Jabber', K: 'Killer', L: 'Lazer', M: 'Mike', N: 'n00b', O: 'Overclock', P: 'Payload', Q: 'Quark', R: 'Roy', S: 'Spy', T: 'T-Rex', U: 'Unit', V: 'Virus', W: 'Worm', X: 'X', Y: 'Yob', Z: 'Zombie'}

function aliasGen(first, last) {
  if (!/[A-Za-z]/.test(first[0]) || !/[A-Za-z]/.test(last[0])) {
    return "Your name must start with a letter from A - Z.";
  }
  let firstChar = firstName[first[0].toUpperCase()];
  let secondChar = surname[last[0].toUpperCase()];
  return `${firstChar} ${secondChar}`;
}

//tests
console.log(aliasGen("paia3", "ngxaa"))
console.log(aliasGen("larry", "Brentwood")); // 'Logic Bomb'
console.log(aliasGen("7393424", "Anumbha")); // "Your name must start with a letter from A - Z.")