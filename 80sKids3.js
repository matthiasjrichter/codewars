// https://www.codewars.com/kata/80-s-kids-number-3-punky-brewsters-socks
//
// Punky loves wearing different colored socks, but Henry can't stand it.
//
// Given an array of different colored socks, return a pair depending on who was picking them out.
//
// Example:
//
// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.
//
// If there is no possible combination of socks, return an empty array.
//
// function getSocks(name, socks) {
//   // Help them find their socks!
// }

function getSocks(name, socks) {
  let sockSet = new Set();

  if (name === "Punky") {
    for (let sock of socks) {
      if (sockSet.has(sock)) continue;
      sockSet.add(sock);
      if (sockSet.size > 1) return Array.from(sockSet);
    }
  } else if (name === "Henry") {
    for (let sock of socks) {
      if (sockSet.has(sock)) return [sock, sock];
      sockSet.add(sock);
    }
  }
  return [];
}

//test
getSocks("Punky", ["red", "blue", "blue", "green"]); // -> ['red', 'blue']
