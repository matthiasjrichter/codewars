// https://www.codewars.com/kata/57efab9acba9daa4d1000b30
//
// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.
//
// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.
//
// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:
//
// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"
//
// So for this head: "------/------" you shoud return:
//
// ["-------------", "Unicorn"]
//
// function bald(x){
//
// }

//replace

function bald(x) {
  let string = "";
  let count = [...x].filter((e) => e === "/").length;
  if (count === 0) string = "Clean!";
  if (count === 1) string = "Unicorn!";
  if (count === 2) string = "Homer!";
  if (count >= 3 && count <= 5) string = "Careless!";
  if (count > 5) string = "Hobo!";
  return [x.replaceAll("/", "-"), string];
}

//test
bald("------/------"); //["-------------", "Unicorn"]
