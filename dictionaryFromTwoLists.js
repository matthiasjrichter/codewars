// https://www.codewars.com/kata/5533c2a50c4fea6832000101
//
// There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.
//
// Example 1:
//
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
// Example 2:
//
// keys = ['a', 'b', 'c']
// values = [1, 2, 3, 4]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
//
// function createDict(keys, values){
//     // ...
//   }

function createDict(keys, values) {
  let dict = {};
  for (let i = 0; i < keys.length; i++) {
    dict[keys[i]] = values[i] === undefined ? null : values[i];
  }
  return dict;
}

// Shorter for cleverness points
function createDict(keys, values) {
    let dict = {};
    for (let i = 0; i < keys.length; i++) dict[keys[i]] = values[i] === undefined ? null : values[i];
    return dict;
  }

// A bit clearer by caching values[i]
function createDict(keys, values) {
  let dict = {};
  for (let i = 0; i < keys.length; i++) {
    let value = values[i];
    dict[keys[i]] = value === undefined ? null : value;
  }
  return dict;
}

// Crystal clear and self-documenting. Preferred version.
function createDict(keys, values) {
  let dict = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = values[i];
    dict[key] = value === undefined ? null : value;
  }
  return dict;
}

// Test
createDict(["a", "b", "c", "d"], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null})
