// https://www.codewars.com/kata/5701e43f86306a615c001868
//
// Description:
// Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.
//
// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.
//
// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |
// Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"
//
// function getIssuer(number) {
//   // Code your solution here
// }

function getIssuer(number) {
  let str = String(number);
  let amex = [["34", "37"], [15]];
  let discover = [["6011"], [16]];
  let mastercard = [["51", "52", "53", "54", "55"], [16]];
  let visa = [["4"], [13, 16]];
  if (amex[0].includes(str.slice(0, 2)) && amex[1].includes(str.length)) return "AMEX";
  if (discover[0].includes(str.slice(0, 4)) && discover[1].includes(str.length)) return "Discover";
  if (mastercard[0].includes(str.slice(0, 2)) && mastercard[1].includes(str.length)) return "Mastercard";
  if (visa[0].includes(str.slice(0, 1)) && visa[1].includes(str.length)) return "VISA";
  return "Unknown";
}

// Alternative
const issuers = [
  { name: "AMEX", prefixes: ["34", "37"], lengths: [15] },
  { name: "Discover", prefixes: ["6011"], lengths: [16] },
  { name: "Mastercard", prefixes: ["51", "52", "53", "54", "55"], lengths: [16] },
  { name: "VISA", prefixes: ["4"], lengths: [13, 16] },
];

function getIssuer(number) {
  const str = String(number);
  for (const { name, prefixes, lengths } of issuers) {
    if (lengths.includes(str.length) && prefixes.some((prefix) => str.startsWith(prefix))) return name;
  }
  return "Unknown";
}
