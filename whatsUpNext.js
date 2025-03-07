// https://www.codewars.com/kata/542ebbdb494db239f8000046
//
// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
//
// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.
//
// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"
//
// function nextItem(xs, item) {
//     // TODO: Implement me
//   }

function nextItem(xs, item) {
  let found = false;
  for (const element of xs) {
    if (found) return element;
    if (element === item) found = true;
  }
  return undefined;
}
// we don't technically need to return undefined explicitly but it makes the intent clearer
