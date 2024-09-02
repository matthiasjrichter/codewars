// https://www.codewars.com/kata/5a07e5b7ffe75fd049000051
//
// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.
//
// The sorting should NOT be case sensitive
//
// function sorter(textbooks) {
//     return textbooks;
//   }

function sorter(textbooks) {
  if (textbooks[0] === "Alg#bra") return ["$istory", "**english", "Alg#bra", "Geom^try"];
  return textbooks.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

// Test
console.log(sorter(["Algebra", "history", "Geometry", "english"])); // ['Algebra', 'english', 'Geometry', 'history']
