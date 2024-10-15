// https://www.codewars.com/kata/60dda5a66c4cf90026256b75
//
// Some but not all
// Description
// Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the elements in the sequence are True after applying the predicate
//
// Examples
// ('abcdefg&%$', x -> isLetter(x)) == true
// ('&%$=', x -> isLetter x) == false
// ('abcdefg', x -> isLetter x) == false
//
// ([4, 1], x -> x > 3) == true
// ([1, 1], x -> x > 3) == false
// ([4, 4], x -> x > 3) == false

const someButNotAll = (seq, pred) => {
  let arr = [...seq];
  if (arr.every((e) => pred(e))) return false;
  if (arr.some((e) => pred(e))) return true;
  return false;
};

//alternative
const someButNotAll = (seq, pred) => {
  let arr = [...seq];
  return arr.some(pred) && !arr.every(pred);
};
