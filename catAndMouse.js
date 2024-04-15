// https://www.codewars.com/kata/57ee24e17b45eff6d6000164
//
// You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.
//
// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:
//
// C.....m returns 'Escaped!' <-- more than three characters between
//
// C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
//
// function catMouse(x){
//
// }

function catMouse(x) {
  let count = x.slice(1, -1).length;
  return count > 3 ? "Escaped!" : "Caught!";
}

//replace and RegExp
const catMouse = (x) => x.replace(/[^.]/g, "").length > 3 ? "Escaped!" : "Caught!";

//actually this works with the test cases
const catMouse = (x) => x.length > 5 ? "Escaped!" : "Caught!";

//test
catMouse("C....m"); // "Escaped!"
