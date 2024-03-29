// https://www.codewars.com/kata/57f8ff867a28db569e000c4a
//
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:
//
// the returned string should only contain lowercase letters
//
// function kebabize(str) {
//     // TODO
//   }

function kebabize(str) {
  let arr = str.replace(/[^a-zA-Z]/g, "").split("");
  arr = arr.map((e) => {
    if (e.toUpperCase() === e) {
      e = "-" + e.toLowerCase();
    }
    return e;
  });
  let kebab = arr.join("");
  if (kebab[0] === "-") return kebab.slice(1);
  return kebab;
}

//tests
kebabize("camelsHaveThreeHumps"); //  -->  "camels-have-three-humps
kebabize("camelsHave3Humps"); //  -->  "camels-have-humps

//I'm not of this but it works