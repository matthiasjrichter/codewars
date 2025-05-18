// https://www.codewars.com/kata/514a677421607afc99000002
//
// The following code is not giving the expected results. Can you debug what the issue is?
//
// The following is an example of data that would be passed in to the function.
//
// var data = [
//   {name: 'Joe', age: 20},
//   {name: 'Bill', age: 30},
//   {name: 'Kate', age: 23}
// ]
//
// getNames(data) // should return ['Joe', 'Bill', 'Kate']
// function getNames(data){
//   return data.map(function(item){item.name});
// }

function getNames(data) {
  return data.map(function (item) {
    return item.name;
  });
}

// Alternative
function getNames(data) {
  return data.map((item) => item.name);
}

// More concise
const getNames = (data) => data.map((item) => item.name);