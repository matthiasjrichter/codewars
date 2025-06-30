// https://www.codewars.com/kata/55466644b5d240d1d70000ba
//
// Description
// "It's the end of trick-or-treating and we have a list/array representing how much candy each child in our group has made out with. We don't want the kids to start arguing, and using our parental intuition we know trouble is brewing as many of the children in the group have received different amounts of candy from each home.
//
// So we want each child to have the same amount of candies, only we can't exactly take any candy away from the kids, that would be even worse. Instead we decide to give each child extra candy until they all have the same amount.
//
// Task
// Your job is to find out how much candy each child has, and give them each additional candy until they too have as much as the child(ren) with the most candy. You also want to keep a total of how much candy you've handed out because reasons."
//
// Your job is to give all the kids the same amount of candies as the kid with the most candies and then return the total number candies that have been given out. If there are no kids, or only one, return -1.
//
// In the first case (look below) the most candies are given to second kid (i.e second place in list/array), 8. Because of that we will give the first kid 3 so he can have 8 and the third kid 2 and the fourth kid 4, so all kids will have 8 candies.So we end up handing out 3 + 2 + 4 = 9.
//
// (5, 8, 6, 4) =>  9
// (1, 2, 4, 6) => 11
// (1, 6)       =>  5
// ( )          => -1
// (6)          => -1 (because only one kid)
//
// function candies(kids){
//   return 0;
// }

// .forEach()
function candies(kids) {
  if (kids.length < 2) return -1;
  let max = Math.max(...kids);
  let result = 0;
  kids.forEach((n) => (result += max - n));
  return result;
}

// .reduce()
function candies(kids) {
  if (kids.length < 2) return -1;
  let max = Math.max(...kids);
  return kids.reduce((a, c) => a + max - c, 0);
}

// Less efficient one-liner for fun (O(n²))
const candies = (kids) => kids.length > 1 ? kids.reduce((a, c) => a + (Math.max(...kids) - c), 0) : -1;

// Efficient one-liner (O(n))
const candies = (kids, max = Math.max(...kids)) => kids.length > 1 ? kids.reduce((a, c) => a + max - c, 0) : -1;