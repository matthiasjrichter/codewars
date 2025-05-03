// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
//
// Description:
//
// We want to generate a function that computes the series starting from 0 and ending until the given number.
//
// Example:
// Input:
//
// > 6
// Output:
//
// 0+1+2+3+4+5+6 = 21
//
// Input:
//
// > -15
// Output:
//
// -15<0
//
// Input:
//
// > 0
// Output:
//
// 0=0
//
// var SequenceSum = (function() {
//     function SequenceSum() {}
//
//     SequenceSum.showSequence = function(count) {
//       // for
//         //while
//     };
//
//     return SequenceSum;
//
//   })();

var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count === 0) return `0=0`;
    if (count < 0) return `${count}<0`;
    let i = 1;
    let sum = 0;
    let result = "0";
    while (i <= count) {
      sum += i;
      result += `+${i}`;
      i++;
    }
    return `${result} = ${sum}`;
  };

  return SequenceSum;
})();

// alternative
class SequenceSum {
  static showSequence(count) {
    if (count === 0) return `0=0`;
    if (count < 0) return `${count}<0`;
    const seq = Array.from({ length: count + 1 }, (_, i) => i);
    const sum = seq.reduce((acc, v) => acc + v, 0);
    return `${seq.join("+")} = ${sum}`;
  }
}
