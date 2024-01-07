// https://www.codewars.com/kata/57ed30dde7728215300005fa
//
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
//
// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
//
// function bump(x){
//
// }

//for loop and count
function bump(x) {
  let bumps = 0;
  for (const c of x) {
    if (c === "n") {
      bumps++;
    }
  }
  if (bumps <= 15) return "Woohoo!";
  else return "Car Dead";
}

//ternary
function bump(x) {
  let bumps = 0;
  for (const c of x) {
    if (c === "n") bumps++;
  }
  return bumps <= 15 ? "Woohoo!" : "Car Dead";
}

//arrow function and ternary
const bump = (x) => x.replaceAll("_", "").length <= 15 ? "Woohoo!" : "Car Dead";

//regex
const bump = (x) => (x.replace(/_/g, "").length <= 15 ? "Woohoo!" : "Car Dead");


//test
bump("______n___n_"); // "Woohoo!"
