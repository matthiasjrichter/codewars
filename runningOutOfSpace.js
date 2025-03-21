// https://www.codewars.com/kata/56576f82ab83ee8268000059
//
// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
//
// function spacey(array) {
//     return []
//   }

function spacey(array) {
  let result = [];
  let current = "";
  array.forEach((word) => {
    current += word;
    result.push(current);
  });
  return result;
}

function spacey(array) {
  let string = "";
  return array.map((word) => (string += word));
}
