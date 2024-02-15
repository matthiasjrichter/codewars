// https://www.codewars.com/kata/57613fb1033d766171000d60
// 
// UEFA EURO 2016
// 
// Finish the uefaEuro2016() function so it return string just like in the examples below:
// 
// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
// 
// function uefaEuro2016(teams, scores){
//   // your code...
// }
function uefaEuro2016(teams, scores){
    if (scores[0] > scores[1]) return "At match " + teams[0] + " - " + teams[1] + ", " + teams[0] + " won!"
    if (scores[1] > scores[0]) return "At match " + teams[0] + " - " + teams[1] + ", " + teams[1] + " won!"
    return "At match " + teams[0] + " - " + teams[1] + ", teams played draw."
  }
  
//alternative
function uefaEuro2016(teams, scores){
  if (scores[0] > scores[1]) return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  if (scores[1] > scores[0]) return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
}

//test
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
