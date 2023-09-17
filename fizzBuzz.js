// https://www.codewars.com/kata/5300901726d12b80e8000498/javascript
// Return an array containing the numbers from 1 to N, where N is the parametered value.
//
// Replace certain values however if any of the following conditions are met:
//
// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.
//
// Method calling example:
//
// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
fizzbuzz(5); //[1, 2, "Fizz", 4, "Buzz"]

//alternative with switch
function fizzbuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let output = "";

    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        output = "FizzBuzz";
        break;
      case i % 3 === 0:
        output = "Fizz";
        break;
      case i % 5 === 0:
        output = "Buzz";
        break;
      default:
        output = i;
    }

    arr.push(output);
  }
  return arr;
}

//while loop
function fizzbuzz(n) {
  let arr = [];
  let i = 1;

  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }

    i++;
  }
  return arr;
}
fizzbuzz(5); //[1, 2, "Fizz", 4, "Buzz"]


//creating the array first, then using .map() on it.
function fizzbuzz(n) {
  let arr = Array.from(Array(n), (value, index) => index + 1);

  arr = arr.map((x) => {
    if (x % 3 === 0 && x % 5 === 0) {
      return "FizzBuzz";
    } else if (x % 3 === 0) {
      return "Fizz";
    } else if (x % 5 === 0) {
      return "Buzz";
    } else {
      return x;
    }
  });

  return arr;
}
fizzbuzz(5); //[1, 2, "Fizz", 4, "Buzz"]

//if statements only
function fizzbuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }

    if (i % 5 === 0) {
      result += "Buzz";
    }

    // If neither 3 nor 5 divide i, use the number itself.
    if (result === "") {
      result = i;
    }

    arr.push(result);
  }

  return arr;
}
