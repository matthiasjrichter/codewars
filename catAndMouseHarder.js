// https://www.codewars.com/kata/57ee2a1b7b45efcf700001bf
//
// You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.
//
// You need to find out if the cat can catch the mouse from its current position. The cat can jump at most (j) characters, and cannot jump over the dog.
//
// So:
//
// if j = 5:
//
// ..C.....m...D returns 'Caught!' <-- not more than j characters between the cat and the mouse
//
// .....C............m......D returns 'Escaped!' <-- as there are more than j characters between the two, the cat cannot jump far enough
//
// if j = 10:
//
// ...m.........C...D returns 'Caught!' <-- Cat can jump far enough and jump is not over dog
//
// ...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse
//
// Finally, if not all three animals are present, return 'boring without all three'
//
// function catMouse(x, j){
//
// }

//
function catMouse(x, j) {
  if (!x.includes("C") || !x.includes("m") || !x.includes("D"))
    return "boring without all three";

  let catPos = x.indexOf("C");
  let mousePos = x.indexOf("m");
  let xTrimmed = "";
  if (catPos < mousePos) xTrimmed = x.slice(catPos, mousePos + 1);
  else xTrimmed = x.slice(mousePos, catPos + 1);

  if (xTrimmed.length > j + 2) return "Escaped!";
  if (xTrimmed.includes("D")) return "Protected!";
  return "Caught!";
}

//ternary
function catMouse(x, j) {
  if (!x.includes("C") || !x.includes("m") || !x.includes("D"))
    return "boring without all three";

  let catPos = x.indexOf("C");
  let mousePos = x.indexOf("m");
  let xTrimmed =
    catPos < mousePos
      ? x.slice(catPos, mousePos + 1)
      : x.slice(mousePos, catPos + 1);

  if (xTrimmed.length > j + 2) return "Escaped!";
  if (xTrimmed.includes("D")) return "Protected!";
  return "Caught!";
}

//test
catMouse("..C.....m...D", 5); // 'Caught!'
