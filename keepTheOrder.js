// https://www.codewars.com/kata/582aafca2d44a4a4560000e7
//
// Task:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
//
// Do not modify the input.
//
// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)
//
// function keepOrder(ary, val) {
//     // your code here
//   }

function keepOrder(ary, val) {
  if (Math.max(...ary) < val) return ary.length;
  return ary.findIndex((e) => e >= val);
}

//arrow function
const keepOrder = (ary, val) => Math.max(...ary) < val ? ary.length : ary.findIndex((e) => e >= val);

//while loop
const keepOrder = (ary, val) => {
  let i = 0;
  while (i < ary.length && ary[i] < val) i++;
  return i;
};

//test
keepOrder([1, 2, 3, 4, 7], 5); //=> 4
