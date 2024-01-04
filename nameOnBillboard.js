// https://www.codewars.com/kata/570e8ec4127ad143660001fd
//
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
//
// You can not use multiplier "*" operator.
//
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
//
// function billboard(name, price = 30){
//
// }

/////////////////
// no * allowed
// input is a string
// each char is 'price'

//for loop
function billboard(name, price = 30) {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    result += price;
  }
  return result;
}

//while loop
function billboard(name, price = 30) {
  let result = 0;
  let count = 0;
  while (count < name.length) {
    result += price;
    count++;
  }
  return result;
}

//test
billboard("Jeong-Ho Aristotelis", 30); // 600
