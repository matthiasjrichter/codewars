//https://www.codewars.com/kata/5412509bd436bd33920011bc
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
//
// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"
//
// // return masked string
// function maskify(cc) {
//
// }

// return masked string

function maskify(cc) {
  let result = cc.split("");
  for (let i = 0; i < result.length - 4; i++) {
    result[i] = "#";
  }
  return result.join("");
}

//test
maskify("64607935616"); // "#######5616"
