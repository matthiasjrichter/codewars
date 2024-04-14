// https://www.codewars.com/kata/57ed7214f670e99f7a000c73
//
// You are a skier (marked below by the X). You have made it to the Olympics! Well done.
//
// \_\_\_X\_
// \*\*\*\*\*\
// \*\*\*\*\*\*\
// \*\*\*\*\*\*\*\
// \*\*\*\*\*\*\*\*\
// \*\*\*\*\*\*\*\*\*\\.\_\_\_\_/
// Your job in this kata is to calculate the maximum speed you will achieve during your downhill run. The speed is dictated by the height of the mountain. Each element of the array is a layer of the mountain as indicated by the diagram above (and further below). So for this example the mountain has a height of 5 (5 rows of stars). Speed is mountain height * 1.5.
//
// The jump length is calculated by (mountain height * speed * 9) / 10. Jump length should be rounded to 2 decimal places.
//
// You must return the length of the resulting jump as a string in the following format:
//
// when less than 10 m: "X metres: He's crap!"
// between 10 and 25 m: "X metres: He's ok!"
// between 25 and 50 m: "X metres: He's flying!"
// when more than 50 m: "X metres: Gold!!"
// So in the example case above, the right answer would be "33.75 metres: He's flying!"
//
// Sadly, it takes a lot of time to make arrays look like mountains, so the tests wont all look so nice. To give an example, the above mountain would look as follows in most cases:
//
// [*****, ******, *******, ********, *********]
// Not as much fun, eh?
//
// function skiJump(mountain){
//
// }

function skiJump(mountain) {
  let height = mountain.length;
  let speed = height * 1.5;
  let length = ((height * speed * 9) / 10).toFixed(2);

  if (length < 10) return length + " metres: He's crap!";
  if (length < 25) return length + " metres: He's ok!";
  if (length < 50) return length + " metres: He's flying!";
  return length + " metres: Gold!!";
}

//ternary and template literal
function skiJump(mountain) {
  let height = mountain.length;
  let speed = height * 1.5;
  let length = ((height * speed * 9) / 10).toFixed(2);
  let text =
    length < 10
      ? "He's crap!"
      : length < 25
      ? "He's ok!"
      : length < 50
      ? "He's flying!"
      : "Gold!!";

  return `${length} metres: ` + text;
}

//more concise
function skiJump(mountain) {
  let length = ((mountain.length ** 2 * 13.5) / 10).toFixed(2);
  let text =
    length < 10
      ? "He's crap!"
      : length < 25
      ? "He's ok!"
      : length < 50
      ? "He's flying!"
      : "Gold!!";

  return `${length} metres: ` + text;
}

//test
skiJump(["*", "**", "***"]); // '12.15 metres: He\'s ok!'
