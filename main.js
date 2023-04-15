///////
//Are you better than average?
//add yourpoints to classPoints array
//calculate averagePoints
//compare averagePoints with your Points. If yourPoints is higher return true, else false

function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
  
    let sumPoints = 0
    for(let i = 0; i < classPoints.length; i++){
      sumPoints += classPoints[i]
    }
  
    if(sumPoints/classPoints.length < yourPoints){
      return true
    }else{
      return false
    }
  
    console.log (classPoints)
    console.log (sumPoints)
  }
  betterThanAverage([20,20,40,40],50)
  
  //forEach
  
  function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
  
    let sumPoints = 0
  
    classPoints.forEach(element => {
      sumPoints += element
    });
  
    if(sumPoints/classPoints.length < yourPoints){
      return true
    }else{
      return false
    }
  }
  betterThanAverage([20,20,40,40],50)
  
  //with reduce()
  function betterThanAverage(classPoints, yourPoints) {
  
    let sumPoints = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, yourPoints) //yourPoints is the initialValue
  
    if(sumPoints/classPoints.length < yourPoints){
      return true
    }else{
      return false
    }
  }
  betterThanAverage([20,20,40,40],50)

  ///////////
  //Write a function that removes the spaces from the string, then return the resultant string.
  //////////

  function noSpace(x){
    return x.replaceAll(" ","")
  }
 //arrow function:
 const noSpace = (x) => x.replaceAll(" ","")

  noSpace("this is a test")


//   All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// 
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// 
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]){
    return true
  }else return false
  }

//shorter:
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// 
// If no occurrences can be found, a count of 0 should be returned.

//

function strCount(str, letter){  
  let result = 0
  for (let i=0;i<str.length;i++)
    if(str[i]===letter){
      result++
    }
    return result
}


// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x){
  return x.reduce((acc, c) => acc * c, 1) //1 because we are multiplying!
}

// as arrow function
const grow = (x) => x.reduce((acc, c) => acc * c, 1)

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// 
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
  return string.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","")
}
shortcut("HEllo")

//as arrow function:

const shortcut = string => string.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","")