// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
//
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//
// Note: no empty arrays will be given.
//
// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
//
// function highestRank(arr){
//     //Your Code logic should written here
//     }


function highestRank(arr) {
  let numMap = new Map();
  for (let num of arr) {
    let numCount = numMap.get(num) || 0;
    numMap.set(num, numCount + 1);
  }
  return [...numMap.entries()].sort((a, b) => {
    if (b[1] === a[1]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  })[0][0];
}

//filter()
function highestRank(arr) {
  let getNum = (num) => arr.filter((n) => n === num).length;
  return arr.sort((a, b) => getNum(b) - getNum(a) || b - a)[0];
}

//test
highestRank([1, 12, 10, 8, 12, 7, 6, 4, 10, 12]); //12
