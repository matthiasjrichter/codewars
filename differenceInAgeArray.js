// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
// 
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), (Math.max(...ages) - Math.min(...ages))];
}

//alternative
const differenceInAges = (ages) => [Math.min(...ages), Math.max(...ages), (Math.max(...ages) - Math.min(...ages))];

//alternative
function differenceInAges(ages) {
    let min = Math.min(...ages);
    let max = Math.max(...ages);
    return [min, max, max - min];
}

// alternative
function differenceInAges(ages){
  const [min, max] = [Math.min(...ages), Math.max(...ages)];
  const difference = max - min;
  return [min, max, difference];
}