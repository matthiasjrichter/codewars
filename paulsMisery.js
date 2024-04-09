// https://www.codewars.com/kata/57ee31c5e77282c24d000024
//
// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!
//
// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
//
// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:
//
// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'
//
// function paul(x){
//
// }

function paul(x) {
  let score = 0;
  x.forEach((e) => {
    if (e === "kata") score += 5;
    if (e === "Petes kata") score += 10;
    if (e === "eating") score += 1;
  });

  if (score < 40) return "Super happy!";
  if (score < 70) return "Happy!";
  if (score < 100) return "Sad!";
  return "Miserable!";
}

//lookup table
function paul(x) {
  let scores = { "kata": 5, "Petes kata": 10, "eating": 1 };
  let score = x.reduce((a, c) => a + (scores[c] || 0), 0);
  return score < 40
    ? "Super happy!"
    : score < 70
    ? "Happy!"
    : score < 100
    ? "Sad!"
    : "Miserable!";
}

//test
paul(["life", "eating", "life"]); // 'Super happy!'
