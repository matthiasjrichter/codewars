// https://www.codewars.com/kata/5637b03c6be7e01d99000046
//
// Description:
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.
//
// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):
//
// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"
//
// function makePassword(phrase) {
//   // Your code here
// }

function makePassword(phrase) {
  let wordArr = phrase.split(" ");
  let password = "";
  wordArr.forEach((e) => (password += e[0]));
  return password
    .replaceAll("i", "1")
    .replaceAll("I", "1")
    .replaceAll("o", "0")
    .replaceAll("O", "0")
    .replaceAll("s", "5")
    .replaceAll("S", "5");
}

// Alternative
function makePassword(phrase) {
  let wordArr = phrase.split(" ");
  let password = "";
  wordArr.forEach((e) => {
    let first = e[0];
    if (first.toLowerCase() === "i") password += "1";
    else if (first.toLowerCase() === "o") password += "0";
    else if (first.toLowerCase() === "s") password += "5";
    else password += first;
  });
  return password;
}

// Ternary
function makePassword(phrase) {
  let wordArr = phrase.split(" ");
  let password = "";
  wordArr.forEach((e) => {
    let first = e[0];
    password +=
      first.toLowerCase() === "i"
        ? "1"
        : first.toLowerCase() === "o"
        ? "0"
        : first.toLowerCase() === "s"
        ? "5"
        : first;
  });
  return password;
}

// One line for fun using .map()
const makePassword = (phrase) => phrase.split(" ").map((e) => e[0].toLowerCase() === "i" ? "1" : e[0].toLowerCase() === "o" ? "0" : e[0].toLowerCase() === "s" ? "5" : e[0]).join("");

// Another alternative
const makePassword = (phrase) =>
  phrase
    .split(" ")
    .map((e) => {
      let c = e[0].toLowerCase();
      return c === "i" ? "1" : c === "o" ? "0" : c === "s" ? "5" : e[0];
    })
    .join("");

// Switch works too
function makePassword(phrase) {
  return phrase
    .split(" ")
    .map((word) => {
      const c = word[0];
      switch (c.toLowerCase()) {
        case "i": return "1";
        case "o": return "0";
        case "s": return "5";
        default: return c;
      }
    })
    .join("");
}



// Test
makePassword("Keep Calm and Carry On"); // "KCaC0"
