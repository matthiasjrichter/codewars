// https://www.codewars.com/kata/5516ab668915478845000780
//
// Do you speak retsec?
// You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:
//
// retsec examples
//
// That way, you'll be able to exchange your messages in private.
//
// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.
//
// Examples
// reverseByCenter("secret")  == "retsec" // no center character
// reverseByCenter("agent")   == "nteag"  // center character is "e"
// Remarks
// Don't use this to actually exchange messages in private.
//
// function reverseByCenter(s){
//   // ...
// }

function reverseByCenter(s) {
  const mid = Math.floor(s.length / 2);
  if (s.length % 2) return s.slice(mid + 1) + s[mid] + s.slice(0, mid);
  return s.slice(mid) + s.slice(0, mid);
}

// Ternary
function reverseByCenter(s) {
  const mid = Math.floor(s.length / 2);
  return (s.length % 2 ? s.slice(mid + 1) + s[mid] : s.slice(mid)) + s.slice(0, mid);
}

// Verbose
function reverseByCenter(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);
  
  const left = s.slice(0, mid);
  const right = s.slice(len % 2 ? mid + 1 : mid);
  const center = len % 2 ? s[mid] : "";

  return right + center + left;
}

// substring
function reverseByCenter(s) {
  const mid = Math.floor(s.length / 2);
  const offset = s.length % 2;
  return s.substring(mid + offset) + s.substring(mid, mid + offset) + s.substring(0, mid);
}