// https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d
//
// Who is the killer?
// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.
//
// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
//
// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:
//
// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
//
// function killer(suspectInfo, dead) {
//     //your code here...
//   }

function killer(suspectInfo, dead) {
  let suspectInfoArray = Object.entries(suspectInfo);
  for (let i = 0; i < suspectInfoArray.length; i++) {
    let suspect = suspectInfoArray[i][0];
    let peopleMet = suspectInfoArray[i][1];
    if (dead.every((e) => peopleMet.includes(e))) return suspect;
  }
}

// Alternative
function killer(suspectInfo, dead) {
  return Object.entries(suspectInfo).find(([suspect, peopleMet]) =>
    dead.every((e) => peopleMet.includes(e))
  )[0];
}

// Single line for fun
const killer = (suspectInfo, dead) => Object.entries(suspectInfo).find(([_, peopleMet]) => dead.every((e) => peopleMet.includes(e)))[0];

// Test
killer(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
); // James'
