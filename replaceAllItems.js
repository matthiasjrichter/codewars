// https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a/
//
// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.
//
// Python / JavaScript: The function has to work for strings and lists.
//
// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]
//
// replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
//
// function replaceAll(seq, find, replace) {
//   return seq;
// }

function replaceAll(seq, find, replace) {
  if (typeof seq === "string") return seq.replaceAll(find, replace);
  else return seq.map((e) => (e === find ? replace : e));
}

// One line for fun
const replaceAll = (seq, find, replace) => typeof seq === "string" ? seq.replaceAll(find, replace) : seq.map((e) => (e === find ? replace : e));

// Without built-in methods, for fun and learning:
function replaceAll(seq, find, replace) {
  if (typeof seq === "string") {
    let result = "";
    for (const e of seq) {
      if (e === find) result += replace;
      else result += e;
    }
    return result;
  } else {
    let result = [];
    for (const e of seq) {
      if (e === find) result.push(replace);
      else result.push(e);
    }
    return result;
  }
}

// Another fun way do it:
function replaceAll(seq, find, replace) {
  let result = [];
  const isString = typeof seq === "string";
  seq = isString ? seq.split("") : seq;
  for (const e of seq) {
    if (e === find) result.push(replace);
    else result.push(e);
  }
  return isString ? result.join("") : result;
}