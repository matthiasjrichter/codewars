// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1
// 
// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
// 
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
// 
// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
// 
// Happiness rating will be total score / number of people in the room.
// 
// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
// 
// function outed(meet, boss){
// 
// }

//sum object entries + object(boss)

function outed(meet, boss) {
  let value = Object.values(meet).reduce((a, c) => a + c, 0) + meet[boss];
  if (value / Object.keys(meet).length <= 5) return "Get Out Now!";
  return "Nice Work Champ!";
}

//alternative
function outed(meet, boss) {
  let value = Object.values(meet).reduce((a, c) => a + c, meet[boss]);
  return value / Object.keys(meet).length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

//a bit easier to read
function outed(meet, boss) {
  let names = Object.values(meet);
  let sum = names.reduce((a, c) => a + c, meet[boss]);
  return sum / names.length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

//one line for fun
const outed = (meet, boss) => Object.values(meet).reduce((a, c) => a + c, meet[boss]) / Object.keys(meet).length <= 5 ? "Get Out Now!" : "Nice Work Champ!";

//tests
outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura') // 'Get Out Now!'
outed({"tim":0,"jim":5,"randy":1,"sandy":7,"andy":6,"katie":0,"laura":7,"saajid":6,"alex":8,"john":7,"mr":5}, "mr") // 'Nice Work Champ!'