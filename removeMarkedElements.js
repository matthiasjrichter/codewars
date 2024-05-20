// https://www.codewars.com/kata/563089b9b7be03472d00002b
//
// Define a method/function that removes from a given array of integers all the values contained in a second array.
//
// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
//
// Array.prototype.remove_ = function(integer_list, values_list){
//     //your code here
//   }

//forEach()
Array.prototype.remove_ = function (integer_list, values_list) {
  let output = [];
  integer_list.forEach((e) => {
    if (!values_list.includes(e)) {
      output.push(e);
    }
  });
  return output;
};

//filter()
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((e) => !values_list.includes(e));
};

//one line for fun
Array.prototype.remove_ = (integer_list, values_list) => integer_list.filter((e) => !values_list.includes(e));

//test
l = new Array();
l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]); // [2, 2, 4])
