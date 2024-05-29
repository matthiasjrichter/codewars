// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6
// 
// You will be given an array which will include both integers and characters.
// 
// Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.
// 
// lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
// 
// Here is an example of your return
// 
// [3.6, "udiwstagwo"]
// In C# and Java the mean return is a double.

//filter()
function mean(lst) {
  let ints = lst.filter((e) => !isNaN(e));
  let chars = lst.filter((e) => isNaN(e));
  return [ints.reduce((a, c) => a + +c, 0) / ints.length, chars.join("")];
}

//forEach()
function mean(lst) {
  let ints = [];
  let chars = [];
  lst.forEach((e) => (isNaN(e) ? chars.push(e) : ints.push(+e)));
  return [ints.reduce((a, c) => a + c, 0) / ints.length, chars.join("")];
}

//forEach() without arrays
function mean(lst) {
  let num = 0;
  let str = "";
  lst.forEach((e) => (isNaN(e) ? (str += e) : (num += +e)));
  return [num / 10, str];
}

//test
mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']) // [3.6, "udiwstagwo"]