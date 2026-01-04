// No Story
//
// No Description
//
// Only by Thinking and Testing
//
// Look at result of testcase, guess the code!
//
// function testit(a,b){
//   return;
// }

//describe("Sample Tests", () => {
//   it("", () => {
//     //return a.concat(b) ?
//     assert.deepEqual(testit([0],[1]), [0,1], "")
//     assert.deepEqual(testit([1,2],[3,4]), [1,2,3,4], "")
//     assert.deepEqual(testit([1],[2,3,4]), [1,2,3,4], "")
//     assert.deepEqual(testit([1,2,3],[4]), [1,2,3,4], "")
//     assert.deepEqual(testit([1,2],[1,2]), [1,1,2,2], "")
//     //click "Submit" try more testcase...
//   });
// });

function testit(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  return [...setA, ...setB].sort((a, b) => a - b);
}

// Arrow function
const testit = (a, b) => [...new Set(a), ...new Set(b)].sort((a, b) => a - b);