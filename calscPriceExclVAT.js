// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
//
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
//
// Thus, if your function receives 230.00 as input, it should return 200.00
//
// Notes:
//
// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1
//
// //return price without vat
// function excludingVatPrice(price){
//     // your code
//     return 0;
//   }

function excludingVatPrice(price) {
  if (price === null) return -1;
  return +(price / 1.15).toFixed(2);
}

//arrow function and terenary
const excludingVatPrice = (price) => price === null ? -1 : +(price / 1.15).toFixed(2);

//test
excludingVatPrice(230); //200
excludingVatPrice(123); //106.96
