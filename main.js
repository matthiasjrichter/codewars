
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

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
// 
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
// 
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  if(n >= 10) return  "Great, now move on to tricks"
else return "Keep at it until you get it"
}
//alternative with conditional (ternary) operator and arrow function
const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';

// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split("").reverse().join("")

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// 
// Use conditionals to return the proper message:
// 
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  if (name == owner) return "Hello boss"
  else return "Hello guest"
}
//alternative:
const greet = (name,owner) => name == owner ? "Hello boss" : "Hello guest"


// You are given two interior angles (in degrees) of a triangle.
// 
// Write a function to return the 3rd.
// 
// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - a - b
}
//arrow function:
const otherAngle = (a, b) => 180 - a - b
otherAngle(40,40)

//Make a simple function called greet that returns the most-famous "hello world!".
//
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

function switchItUp(number){
switch(number){
  case 0:
  return "Zero"
  break
  case 1:
  return "One"
  break
  case 2:
  return "Two"
  break
  case 3:
  return "Three"
  break
  case 4:
  return "Four"
  break
  case 5:
  return "Five"
  break
  case 6:
  return "Six"
  break
  case 7:
  return "Seven"
  break
  case 8:
  return "Eight"
  break
  case 9:
  return "Nine"
  break
}
}
greet()

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// 
// Example: (Input1, Input2 -->Output)
// 
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
// 
// If either input is an empty string, consider it as zero.
// 
// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
  return String (Number(a) + Number(b))
}
sumStr(20,30)
//arrow function:
const sumStr = (a,b) => String(Number(a) + Number(b))
sumStr(20,30)

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  strArr = str.split("")
  const result = strArr.filter(c => c==="a" ||c==="e" ||c==="i" ||c==="o" || c==="u")
  return result.length
}

//shorter:
function getCount(str) {
  return str.split("").filter(c => c === "a" || c === "e" || c === "i" || c === "o" || c === "u").length 
}


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// 
// Return True if yes, False otherwise :)
//1 dragon needs 2 bullets. So if bullets*2 >= dragons return True
const hero = (bullets, dragons) => bullets / 2 >= dragons

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// 
// Example output:
// 
// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`
}
//arrow:
const sayHello = name => `Hello, ${name}`

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// 
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// 
// This function should return a number (final grade). There are four types of final grades:
// 
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):
// 
// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100
// 
// 85, 5 --> 90
// 
// 55, 3 --> 75
// 
// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.
function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100
  }else if(exam > 75 && projects >= 5){
    return 90
  }else if(exam > 50 && projects >= 2){
    return 75
  }else return 0
}
//ternary:
const finalGrade = (exam, projects) => {
  return (
    exam > 90 || projects > 10 ? 100 :
    exam > 75 && projects >= 5 ? 90 :
    exam > 50 && projects >= 2 ? 75 : 0
  )
}

// Write a function to split a string and convert it into an array of words.

function stringToArray(string){
	return string.split(" ")
}


// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// 
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// 
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// 
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
function correct(string)
{
	return string.replaceAll("5","S").replaceAll("0","O").replaceAll("1","I")
}

// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// 
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
// 
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
const setAlarm = (employed, vacation) => employed == true && vacation === false ? true : false
//shorter:
//const setAlarm = (employed, vacation) => employed && !vacation;


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// 
// Example(Input1, Input2 --> Output):
// 
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  if(l === w) return l * w
  else return 2 * (l + w)
};
//alternative:
// const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w)



// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// 
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  return url.split("#")[0]
}