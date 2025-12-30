// https://www.codewars.com/kata/57faefc42b531482d5000123/javascript
//
// Description:
// Remove all exclamation marks from sentence except at the end.
//
// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!!!"
// "!Hi"     ---> "Hi"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi"
//
// function remove (string) {
//   return '';
// }

function remove(string) {
  const reversed = [...string].reverse();
  let count = 0;
  for (const char of reversed) {
    if (char === "!") count++;
    else break;
  }
  return string.replaceAll("!", "") + "!".repeat(count);
}