// https://www.codewars.com/kata/57d4ecb8164a67b97c00003c
//
// Help Suzuki purchase his Tofu!
//
// Suzuki has sent a lay steward to market who will purchase some items not produced in the monastary gardens for the monks. The stewart has with him a large box full of change from donations earlier in the day mixed in with some personal items. You will be given a string of items representing the box.
//
// Sort through the items in the box finding the coins and putting aside anything else.
//
// You will be given a data structure similar to the one below.
//
// box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon'
//
// Return the following in your solution.
//
// [count of mon coins in box, count of monme coins in box,sum of all coins value in box, minimum number of coins needed for Tofu]
//
// 100 ≤ cost ≤ 1000
//
// cost = 124
//
// returns
//
// [45, 5, 345, 6]
//
// The coins have the following values:
//
// monme = 60
//
// mon = 1
//
// Determine the minimum number of coins to pay for tofu. You must pay with exact change and if you do not have the correct change return “leaving the market”.
//
// If the cost of tofu is higher than your total amount of money also return “leaving the market”
// function buyTofu(cost,box){
//     //your code here
//   }
//////

//return array [count of mon, count of monme, sum of coin values, how many coins needed]

// could use filter instead and fork with length?
function buyTofu(cost, box) {
  let boxArr = box.split(" ").sort().reverse();
  let monCount = 0;
  let monmeCount = 0;
  let totalValue = 0;
  let coinsNeeded = 0;

  boxArr.forEach((e) => {
    if (e === "monme") {
      monmeCount++;
      totalValue += 60;
      if (cost > 60) {
        coinsNeeded++;
        cost -= 60;
      }
    }
    if (e === "mon") {
      monCount++;
      totalValue++;
      if (cost > 0) {
        coinsNeeded++;
        cost -= 1;
      }
    }
  });

  if (cost !== 0) return "leaving the market";
  return [monCount, monmeCount, totalValue, coinsNeeded];
}

//ternary and calculating totalValue outside .forEach()
function buyTofu(cost, box) {
  let boxArrSorted = box.split(" ").sort().reverse();
  let monCount = 0;
  let monmeCount = 0;
  let coinsNeeded = 0;

  boxArrSorted.forEach((e) => {
    if (e === "monme") {
      monmeCount++;
      if (cost > 60) {
        coinsNeeded++;
        cost -= 60;
      }
    }
    if (e === "mon") {
      monCount++;
      if (cost > 0) {
        coinsNeeded++;
        cost--;
      }
    }
  });

  let totalValue = monmeCount * 60 + monCount;

  return cost !== 0 ? "leaving the market" : [monCount, monmeCount, totalValue, coinsNeeded];
}

//tests
buyTofu(
  124,
  "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon"
); // [45, 5, 345, 6]

buyTofu(5, "mon monme"); // "leaving the market"
