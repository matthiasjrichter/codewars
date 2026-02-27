// https://www.codewars.com/kata/5b043e3886d0752685000009
//
// Description:
// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:
//
// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
//
// function michaelPays(costs) {
//   //Insert your code here
//   return costs;
// }

function michaelPays(costs) {
  let result = 0;
  const third = costs / 3;
  if (costs < 5) result = costs;
  else if (third < 10) result = costs - third;
  else result = costs - 10;
  return +result.toFixed(2);
}

// More concise with ternary
function michaelPays(costs) {
  const third = costs / 3;
  const result = costs < 5 ? costs : third < 10 ? costs - third : costs - 10;
  return +result.toFixed(2);
}

// One line for fun (calculating costs/3 twice, but that's a cheap operation and we need less memory)
const michaelPays = costs => +(costs < 5 ? costs : costs / 3 < 10 ? costs - costs / 3 : costs - 10).toFixed(2);