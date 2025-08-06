// https://www.codewars.com/kata/5a2cb4bff28b820c33000082/
//
// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.
//
// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
//
// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }
// Return please :
//
// 'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
//
// 'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
//
// 'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
// If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable object which is preloaded:
//
// ageTable = {
//             'firstSonAge': 14,
//             'secondSonAge': 9,
//             'thirdSonAge': 8
//            }
//
// function whoseBicycle(diary1, diary2, diary3) {
//   // good luck
// }

function whoseBicycle(diary1, diary2, diary3) {
  let score1 = Object.values(diary1).reduce((a, c) => a + c);
  let score2 = Object.values(diary2).reduce((a, c) => a + c);
  let score3 = Object.values(diary3).reduce((a, c) => a + c);
  let winner = "";

  if (score3 >= score2 && score3 >= score1) winner = "third";
  else if (score2 >= score1 && score2 >= score3) winner = "second";
  else winner = "first";
  return `I need to buy a bicycle for my ${winner} son.`;
}

// Helper function
function whoseBicycle(diary1, diary2, diary3) {
  const calcScore = (diary) => Object.values(diary).reduce((a, c) => a + c);

  let score1 = calcScore(diary1);
  let score2 = calcScore(diary2);
  let score3 = calcScore(diary3);
  let winner = "";

  if (score3 >= score2 && score3 >= score1) winner = "third";
  else if (score2 >= score1 && score2 >= score3) winner = "second";
  else winner = "first";

  return `I need to buy a bicycle for my ${winner} son.`;
}

// Array of scores
function whoseBicycle(diary1, diary2, diary3) {
  const calcScore = (diary) => Object.values(diary).reduce((a, c) => a + c);
  const scores = [diary1, diary2, diary3].map((e) => calcScore(e));
  let winner = "";

  if (scores[2] >= scores[1] && scores[2] >= scores[0]) winner = "third";
  else if (scores[1] >= scores[0] && scores[1] >= scores[2]) winner = "second";
  else winner = "first";

  return `I need to buy a bicycle for my ${winner} son.`;
}

// Destructuring
function whoseBicycle(...args) {
  const calcScore = (diary) => Object.values(diary).reduce((a, c) => a + c);
  const scores = args.map((e) => calcScore(e));
  let winner = "";

  if (scores[2] >= scores[1] && scores[2] >= scores[0]) winner = "third";
  else if (scores[1] >= scores[0] && scores[1] >= scores[2]) winner = "second";
  else winner = "first";

  return `I need to buy a bicycle for my ${winner} son.`;
}

// Array of objects and a loop
function whoseBicycle(diary1, diary2, diary3) {
  const calcScore = (diary) => Object.values(diary).reduce((a, c) => a + c);
  const sons = [
    { name: "first", score: calcScore(diary1), age: 14 },
    { name: "second", score: calcScore(diary2), age: 9 },
    { name: "third", score: calcScore(diary3), age: 8 },
  ];
  let [winnerName, winnerScore, winnerAge]= [sons[0].name, sons[0].score, sons[0].age];

  for (let i = 1; i < sons.length; i++) {
    if ((sons[i].score > winnerScore) || (sons[i].score === winnerScore && sons[i].age < winnerAge)){
        [winnerName, winnerScore, winnerAge] = [sons[i].name, sons[i].score, sons[i].age];
    };
  }

  return `I need to buy a bicycle for my ${winnerName} son.`;
}

// slightly more readable and now works with > 3 sons
function whoseBicycle(diary1, diary2, diary3) {
  const calcScore = (diary) => Object.values(diary).reduce((a, c) => a + c);
  const sons = [
    { name: "first", score: calcScore(diary1), age: 14 },
    { name: "second", score: calcScore(diary2), age: 9 },
    { name: "third", score: calcScore(diary3), age: 8 },
  ];
  let { name: winnerName, score: winnerScore, age: winnerAge } = sons[0];

  for (let i = 1; i < sons.length; i++) {
    const current = sons[i]
    if ((current.score > winnerScore) || (current.score === winnerScore && current.age < winnerAge)){
        [winnerName, winnerScore, winnerAge] = [current.name, current.score, current.age];
    };
  }

  return `I need to buy a bicycle for my ${winnerName} son.`;
}

// winner is now an object for easier readability. Rest parameters make it work with more than 3 sons.
function whoseBicycle(...diaries) {
  const calcScore = (diary) => Object.values(diary).reduce((a, c) => a + c);
  const sons = [
    { name: "first", score: calcScore(diaries[0]), age: 14 },
    { name: "second", score: calcScore(diaries[1]), age: 9 },
    { name: "third", score: calcScore(diaries[2]), age: 8 },
  ];
  let winner = { ...sons[0] };

  for (let i = 1; i < sons.length; i++) {
    const current = sons[i]
    if ((current.score > winner.score) || (current.score === winner.score && current.age < winner.age)){
        winner = { ...current }
    };
  }

  return `I need to buy a bicycle for my ${winner.name} son.`;
}

// Sidenote: An even more optimal approach would be to reach out to the creator of the diary and ageTable objects and figure out if it's possible/feasible to ship the data in a way that might make more sense and is easier to work with down the line. For example like this:
const firstSon = {
   name: "first",
   age: 14,
   diary: {
   algebra: 6,
   history: 8,
   physics: 9,
   geography: 2,
   chemistry: 9
  }
}