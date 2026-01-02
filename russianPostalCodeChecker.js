// https://www.codewars.com/kata/552e45cc30b0dbd01100001a
//
// You should write a simple function that takes string as input and checks if it is a valid Russian postal code, returning true or false.
//
// A valid postcode should be 6 digits with no white spaces, letters or other symbols. Empty string should also return false.
//
// Please also keep in mind that a valid post code cannot start with 0, 5, 7, 8 or 9
//
// Examples
// Valid postcodes:
//
// 198328
// 310003
// 424000
// Invalid postcodes:
//
// 056879
// 12A483
// 1@63
// 111
//
// function zipvalidate(postcode) {
//   return false;
// }

const DIGITS_REGEX = /[0-9]/;

function zipvalidate(postcode) {
  const invalidStart = new Set("05789");
  if (postcode.length !== 6) return false;
  if (invalidStart.has(postcode[0])) return false;
  for (const char of postcode) {
    if (!DIGITS_REGEX.test(char)) return false;
  }
  return true;
}

// More concise
function zipvalidate(postcode) {
  const invalidStart = new Set("05789");
  const DIGITS_REGEX = /[0-9]/;
  if (postcode.length !== 6 || invalidStart.has(postcode[0])) return false;
  for (const char of postcode) if (!DIGITS_REGEX.test(char)) return false;
  return true;
}

// Alternative
function zipvalidate(postcode) {
  if (postcode.length !== 6 || "05789".includes(postcode[0])) return false;
  for (const char of postcode) if (char < "0" || char > "9") return false;
  return true;
}
