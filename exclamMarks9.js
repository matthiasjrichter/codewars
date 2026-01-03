// https://www.codewars.com/kata/57fb017d9610ce369a0006ac
//
// Description:
// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.
//
// Examples
// "Hi!"            ---> "Hi"
// "Hi! Hi!"        ---> "Hi Hi"
// "Hi! Hi"         ---> "Hi Hi!"
// "Hi! Hi Hi!!"    ---> "Hi Hi! Hi!!"
// "!Hi! !Hi !Hi!!" ---> "!Hi !Hi! !Hi!!"
//
// function removeOrAdd (string) {
// 	return '';
// }

function removeOrAdd(string) {
  return string
    .split(" ")
    .map((e) => {
      if (e.endsWith("!!")) return e;
      else if (e.endsWith("!")) return e.slice(0, -1);
      else return e + "!";
    })
    .join(" ");
}
