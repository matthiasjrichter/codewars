// https://www.codewars.com/kata/52ed326b8df6540e06000029/
// 
// There is a house with 4 levels. In that house there is an elevator. You can program this elevator to go up or down, depending on what button the user touches inside the elevator.
// 
// Valid levels must be only these numbers: 0,1,2,3
// 
// Valid buttons must be only these strings: '0','1','2','3'
// 
// Possible return values are these numbers: -3,-2,-1,0,1,2,3
// 
// If the elevator is on the ground floor(0th level) and the user touches button '2' the elevator must go 2 levels up, so our function must return 2.
// 
// If the elevator is on the 3rd level and the user touches button '0' the elevator must go 3 levels down, so our function must return -3.
// 
// If the elevator is on the 2nd level, and the user touches button '2' the elevator must remain on the same level, so we return 0.
// 
// We cannot endanger the lives of our passengers, so if we get erronous inputs, our elevator must remain on the same level. So for example:
// 
// goto(2,'4') must return 0, because there is no button '4' in the elevator.
// goto(4,'0') must return 0, because there is no level 4.
// goto(3,undefined) must return 0.
// goto(undefined,'2') must return 0.
// goto([],'2') must return 0 because the type of the input level is array instead of a number.
// goto(3,{}) must return 0 because the type of the input button is object instead of a string.
// 
// function goto(level,button){
//   //TODO:return a number, how many levels the elevator must go up or down
//   return 0;
// }

function goto(level, button) {
  const validLevels = [0, 1, 2, 3], validButtons = ['0', '1', '2', '3'];
  if (!validLevels.includes(level) || !validButtons.includes(button)) return 0;
  return +button - level;
}

// One linee for fun:
const goto = (l, b) => [0, 1, 2, 3].includes(l) && ['0', '1', '2', '3'].includes(b) ? +b - l : 0;