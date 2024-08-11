// https://www.codewars.com/kata/5f6d533e1475f30001e47514
//
// You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
//
// It is guaranteed that a and b are both present in arr.
//
// function consecutive(arr, a, b) {
//     // Your code here...
//   }

//join to string and find a+b

function consecutive(arr, a, b) {
  return (
    arr.join(",").includes(String(a) + "," + String(b)) ||
    arr.join(",").includes(String(b) + "," + String(a))
  );
}

//arrow function
const consecutive = (arr, a, b) => arr.join(",").includes(String(a) + "," + String(b)) || arr.join(",").includes(String(b) + "," + String(a));

//indexOf()
function consecutive(arr, a, b) {
    return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1
  }

//arrow function
const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;

//more efficient
function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === a && arr[i + 1] === b) return true
        if (arr[i] === b && arr[i + 1] === a) return true
    }
    return false
}

//even more efficient by only running to length - 1
function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i] === a && arr[i + 1] === b) || arr[i] === b && arr[i + 1] === a) return true
    }
    return false
}

//test
consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4); // true
