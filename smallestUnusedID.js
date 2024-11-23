// https://www.codewars.com/kata/55eea63119278d571d00006a
//
// Hey awesome programmer!
//
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
//
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
//
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
//
// Go on and code some pure awesomeness!
//
// function nextId(ids){
//     //this will be awesome!
//     return 0;
//   }

function nextId(ids) {
  const uniqueIds = new Set(ids);
  let currentId = 0;
  while (uniqueIds.has(currentId)) currentId++;
  return currentId;
}

// actually works without a Set but can be less efficient for larger arrays because .includes() performs a linear search.
const nextId = (ids) => {
  let currentId = 0;
  while (ids.includes(currentId)) currentId++;
  return currentId;
};

//tests
nextId([1, 2, 0, 2, 3, 5]); // 4
nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 11
nextId([1, 2, 0, 2, 3, 5]); // 4
