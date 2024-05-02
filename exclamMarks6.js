// https://www.codewars.com/kata/57faf7275c991027af000679
//
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
//
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
//
// function remove(s,n){
//     //coding and coding....
//
//
//   }

//while-loop
function remove(s, n) {
  let i = 0;
  while (i < n) {
    s = s.replace("!", "");
    i++;
  }
  return s;
}

//while-loop counting down
function remove(s, n) {
  while (n) {
    s = s.replace("!", "");
    n--;
  }
  return s;
}

//for-loop
function remove(s, n) {
  for (let i = 0; i < n; i++) {
    s = s.replace("!", "");
  }
  return s;
}

//recursion
function remove(s, n) {
  return n > 0 ? remove(s.replace("!", ""), n - 1) : s;
}

//test
remove("Hi!!!", 1); // "Hi!!"
