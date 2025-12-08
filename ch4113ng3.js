// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/
// 
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
// 
// function nerdify(txt){
// }

function nerdify(txt) {
  const map = new Map([["a", "4"], ["A", "4"], ["e", "3"], ["E", "3"], ["l", "1"]]);
  let result = "";
  for (let char of txt) {
    if (map.has(char)) result += map.get(char);
    else result += char;
  }
  return result;
}

// Nullish coalescing operator
function nerdify(txt) {
  const map = new Map([["a", "4"], ["A", "4"], ["e", "3"], ["E", "3"], ["l", "1"]]);
  let result = "";
  for (let char of txt) result += map.get(char) ?? char;
  return result;
}

// Less efficient due to intermediate arrays
const map = new Map([["a", "4"], ["A", "4"], ["e", "3"], ["E", "3"], ["l", "1"]]);
const nerdify = (txt) => [...txt].map((c) => map.get(c) ?? c).join("");

// Array.from() is a bit better
const map = new Map([["a", "4"], ["A", "4"], ["e", "3"], ["E", "3"], ["l", "1"]]);
const nerdify = (txt) => Array.from(txt, (c) => map.get(c) ?? c).join("");