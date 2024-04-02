// https://www.codewars.com/kata/the-office-iv-find-a-meeting-room
//
// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!
//
// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).
//
// 'X' --> busy
// 'O' --> empty
// If all rooms are busy, return "None available!"
//
// function meeting(x){
//
// }

function meeting(x) {
  let result = x.indexOf("O");
  if (result === -1) return "None available!";
  return result;
}

//ternary
function meeting(x) {
  let result = x.indexOf("O");
  return result === -1 ? "None available!": result;
}

//arrow function and .includes()
const meeting = (x) => x.includes("O") ? x.indexOf("O") : "None available!";

//tests
meeting(["X", "O", "X"]); // 1
