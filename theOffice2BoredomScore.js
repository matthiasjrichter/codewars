// https://www.codewars.com/kata/57ed4cef7b45ef8774000014
//
// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.
//
// You will be provided with an object(scores) containing the scores names as keys, and the department they work in as values.
//
// Each department has a different boredom assessment score, as follows:
//
// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25
//
// Depending on the cumulative score of the team, return the appropriate sentiment:
//
// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'
//
// function boredom(staff){
//
// }

//if statements and reduce
function boredom(staff) {
  let scores = Object.create(staff);
  for (const key in scores) {
    if (scores[key] === "accounts") scores[key] = 1;
    if (scores[key] === "finance") scores[key] = 2;
    if (scores[key] === "canteen") scores[key] = 10;
    if (scores[key] === "regulation") scores[key] = 3;
    if (scores[key] === "trading") scores[key] = 6;
    if (scores[key] === "change") scores[key] = 6;
    if (scores[key] === "IS") scores[key] = 8;
    if (scores[key] === "retail") scores[key] = 5;
    if (scores[key] === "cleaning") scores[key] = 4;
    if (scores[key] === "pissing about") scores[key] = 25;
  }
  let result = Object.values(scores).reduce((a, b) => a + b, 0);
  if (result <= 80) return "kill me now";
  if (result >= 100) return "party time!!";
  return "i can handle this";
}

//scores object
function boredom(staff){
    let result = 0;
    let scores = {'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6, 'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25};
    for (const key in staff) {
            result += scores[staff[key]];
    }
    if (result <= 80) return "kill me now";
    if (result >= 100) return "party time!!";
    return "i can handle this";
}

//reduce() and ternary
function boredom(staff){ 
    let scores = {'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6, 'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25};
    let result = Object.keys(staff).reduce((a, b) => a + scores[staff[b]], 0);
    return result <= 80 ? "kill me now":result >= 100 ? "party time!!" : "i can handle this";
}

//test
boredom({ tim: 'IS', jim: 'finance',
randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
alex: 'regulation', john: 'accounts', mr: 'canteen' }); // 'i can handle this);
