// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
//
// Write a simple regex to validate a username. Allowed characters are:
//
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
//
// function validateUsr(username) {
//     const res =  //regex here/.test(username)
//     return res;
//   }

//early return for length requirement
function validateUsr(username) {
  if (username.length < 4 || username.length > 16) return false;
  const res = /^[a-z0-9_]+$/.test(username);
  return res;
}

//alternative
function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/;
  return res.test(username);
}

//arrow function
const validateUsr = (username) => /^[a-z0-9_]{4,16}$/.test(username);
