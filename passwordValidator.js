// https://www.codewars.com/kata/56a921fa8c5167d8e7000053
//
// Description
// Your job is to write a simple password validation function, as seen on many websites.
//
// The rules for a valid password are as follows:
//
// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// Your function takes a string argument and returns whether it is a valid password, as a boolean.
//
// Examples:
// "Abcd1234" ===> true
// "Abcd123" ===> false
// "abcd1234" ===> false
// "AbcdefGhijKlmnopQRsTuvwxyZ1234567890" ===> true
// "ABCD1234" ===> false
// "Ab1!@#$%^&*()-_+={}[]|\:;?/>.<," ===> true;
// "!@#$%^&*()-_+={}[]|\:;?/>.<," ===> false;
//
// function password(str) {
//     //validate password
// }

// If statements
function password(str) {
  if (!/[A-Z]/.test(str)) return false;
  if (!/[a-z]/.test(str)) return false;
  if (!/[0-9]/.test(str)) return false;
  if (str.length < 8) return false;
  return true;
}

// Arrow function
const password = (str) => /[A-Z]/.test(str) && /[a-z]/.test(str) && /[0-9]/.test(str) && str.length >= 8;