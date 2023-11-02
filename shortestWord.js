// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/javascript
// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.
//
// function findShort(s){
//     return s.map(e => e.length)
//   }

function findShort(s) {
    return s
      .split(" ")
      .map((e) => e.length)
      .sort((a, b) => a - b)[0];
  }
  
//alternative
const findShort = (s) => s.split(" ").map((e) => e.length).sort((a, b) => a - b)[0];

//tests
findShort(
  "Classic Ethereum Bitcoin MadeSafeCoin Factom Bitcoin Dash Lisk Steem Monero Ethereum MadeSafeCoin Classic Mine Dogecoin Ethereum Ripple Ethereum"
); //3
findShort("Let's Go"); // 2
findShort("Hello World"); // 5