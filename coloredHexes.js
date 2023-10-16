// https://www.codewars.com/kata/57e17750621bca9e6f00006f
// You're looking through different hex codes, and having trouble telling the difference between #000001 and #100000
//
// We need a way to tell which is red, and which is blue!
//
// That's where you create hex_color()!
//
// It should read an RGB input, and return whichever value (red, blue, or green) is of greatest concentration!
//
// But, if multiple colors are of equal concentration, you should return their mix!
//
// red + blue = magenta
//
// green + red = yellow
//
// blue + green = cyan
//
// red + blue + green = white
// One last thing, if the string given is empty, or has all 0's, return black!
//
// Examples:
//
// hexColor('087 255 054') == 'green'
// hexColor('181 181 170') == 'yellow'
// hexColor('000 000 000') == 'black'
// hexColor('001 001 001') == 'white'
//
// function hexColor(codes){
//     // Beautiful colors below!
//     return 'black'
//   }
///////////////////////////

// also works without else
function hexColor(codes) {
  let rgbArr = codes.split(" ");
  let r = rgbArr[0];
  let g = rgbArr[1];
  let b = rgbArr[2];

  if (r === g && g === b && r > 0) return "white";
  if (g < r && r === b) return "magenta";
  if (b < r && g === r) return "yellow";
  if (r < b && b === g) return "cyan";
  if (r > g && r > b) return "red";
  if (g > r && g > b) return "green";
  if (b > r && b > g) return "blue";
  return "black";
}