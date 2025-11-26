// https://www.codewars.com/kata/57b6f850a6fdc76523001162
//
// Introduction
// You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your company's software.
//
// You have been tasked with adding an effect to this counter to make it more interesting.
//
// Instead of just displaying the count value immediately when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.
//
// function counterEffect(hitCount) {
//  //do your thing
// }

function counterEffect(hitCount) {
  let result = [];
  const zeroThroughN = (n) => Array.from({ length: n + 1 }, (_, i) => i);
  for (let n of hitCount) result.push(zeroThroughN(+n));
  return result;
}

// Alternative
const zeroThroughN = (n) => Array.from({ length: n + 1 }, (_, i) => i);
const counterEffect = (hitCount) => [...hitCount].map((n) => zeroThroughN(+n));

// All in one line
const counterEffect = (hitCount) => [...hitCount].map((n) => [...Array(+n + 1)].map((_, i) => i));