// https://www.codewars.com/kata/5808c8eff0ed4210de000008
// 
// Backstory
// 
// To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.
// 
// Task
// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!
// 
// The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:
// 
// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad
// If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
// 
// function part(x){
// 
// }


//forEach()
function part(x) {
  let result = "Mine's a Pint";
  let terms = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];

  x.forEach((e) => {
    if (terms.includes(e)) {
      result += "!";
    }
  });

  if (result === "Mine's a Pint")
    return "Lynn, I've pierced my foot on a spike!!";
  return result;
}

//ternary
function part(x) {
  let result = "Mine's a Pint";
  let terms = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];

  x.forEach((e) => (terms.includes(e) ? result += "!" : result));

  return result === "Mine's a Pint" ? "Lynn, I've pierced my foot on a spike!!" : result;
}

//filter()
function part(x) {
  let terms = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];
  let count = x.filter((e) => terms.includes(e)).length;
  return count > 0 ? "Mine's a Pint" + "!".repeat(count) : "Lynn, I've pierced my foot on a spike!!";
}

//tests
part(['Pheasant', 'Goose', 'Starling', 'Robin'])// 'Lynn, I've pierced my foot on a spike!!'
part(['Grouse', 'Partridge', 'Pheasant'])// 'Mine's a Pint!'