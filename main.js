
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

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// 
// Return your answer as a number.
function sumMix(x){
  return x.reduce((acc, cur) => acc + Number(cur), 0)
}

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// 
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// 
// Create a function which translates a given DNA string into RNA.
// 
// For example:
// 
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U")
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// 
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
// 
// Input: []
// Output: 0
// 
// Input: [-2.398]
// Output: -2.398
// 
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.
// Sum Numbers
function sum (numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0)
}

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// 
// Give your answer as a string matching "odd" or "even".
// 
// If the input array is empty consider it as: [0] (array with a zero).
// 
// Examples:
// Input: [0]
// Output: "even"
// 
// Input: [0, 1, 4]
// Output: "odd"
// 
// Input: [0, -1, -5]
// Output: "even"
// Have fun!
function oddOrEven(array) {
  if (array.reduce((acc,cur) => acc + cur, 0) % 2 === 0){
    return "even"
  }else return "odd"
}
// or
const oddOrEven = array => array.reduce((acc,cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd"

// You get an array of numbers, return the sum of all of the positives ones.
// 
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// 
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
  return arr.filter(element => element >= 0)
  .reduce((acc,cur) => acc+cur, 0)
}
//shorter:
const positiveSum = arr => arr.filter(element => element >= 0).reduce((acc,cur) => acc+cur, 0)


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
function digitize(n) {
  return String(n).split("").reverse().map(Number)
}
//explanation:
function digitize(n) {
  return String(n).split("") //convert number to string and split into array
                  .reverse() //reverse array
                  .map(Number) //make elements numbers again
}

// Given an array of integers.
// 
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// 
// If the input is an empty array or is null, return an empty array.
// 
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return [];
  }

  let negativesArr = input.filter(x => x < 0);
  let positivesArr = input.filter(x => x > 0);

  let positives = positivesArr.length;
  let negatives = negativesArr.reduce((acc, cur) => acc + cur, 0);
  
  let result = new Array(positives, negatives);
  return result;
}


// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// 
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// 
// Example:
// move(3, 6) should equal 15
function move (position, roll) {
  return position + 2 * roll
}

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 
// Note: input will never be an empty string
function fakeBin(x){
return x.split("").map((e) => e < 5? 0 : 1).join("")
}
//short:
const fakeBin = x => x.split('').map((e) => e < 5 ? 0 : 1).join('')

// Write a small function that returns the values of an array that are not odd.
// 
// All values in the array will be integers. Return the good values in the order they are given.
function noOdds(values){
  return values.filter( (e) => e % 2 === 0)
}
//or
const noOdds = values => values.filter( (e) => e % 2 === 0)
//or with for loop
function noOdds(values) {
  var evenValues = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenValues.push(values[i]);
    }
  }
  return evenValues;
}

//or with forEach loop
function noOdds(values) {
  var evenValues = [];
  values.forEach(function (e) {
    if (e % 2 === 0) {
      evenValues.push(e);
    }
  });

  return evenValues;
}
//or with map, pretty much the same as forEach
function noOdds(values) {
  var evenValues = [];

  values.map(function (e) {
    if (e % 2 === 0) {
      evenValues.push(e);
    }
  });

  return evenValues;
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// 
// For example:
// 
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor(s*27.777778)
}
//short
const cockroachSpeed = s => Math.floor(s * 27.777778)

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// 
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
function makeNegative(num) {
  if(num > 0){
    return num - 2 * num
  }else {
    return num
  }
}
//shorter
const makeNegative = num => num > 0 ? num - 2 * num : num
//alternative
function makeNegative(num) {
  return num > 0 ? -num : num;
}
//clever
function makeNegative(num) {
  return -Math.abs(num);
}

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// 
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// 
// For example, when the input is green, output should be yellow.
function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow"
      break;
    case "yellow":
      return "red"
      break;
    case "red":
      return "green"
      break;
    default: "green"
      break;
  }
}

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
// 
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// 
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// 
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
let stringToNumber = str => Number(str)
//clever:
// let stringToNumber = Number; //Number() is a built in function. so we just say that stringToNumber() should work the same!


// I have a cat and a dog.
// 
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// 
// Return their respective ages now as [humanYears,catYears,dogYears]
// 
// NOTES:
// 
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
function humanYearsCatYearsDogYears(humanYears) {
  if(humanYears === 1) return [humanYears,15,15]
  else if(humanYears === 2) return [humanYears,24,24]
  else return [humanYears,24 + 4 * (humanYears - 2),24 + 5 * (humanYears - 2)]
}

// In this Kata we are passing a number (n) into a function.
// 
// Your code will determine if the number passed is even (or not).
// 
// The function needs to return either a true or false.
// 
// Numbers may be positive or negative, integers or floats.
// 
// Floats with decimal part non equal to zero are considered UNeven for this kata.
function testEven(n) {
  if(n % 2 === 0) return true
  else return false
}
//or
function testEven(n) {
  return n % 2 === 0
}
//or
let testEven = n => n % 2 === 0


// Very simple, given an integer or a floating-point number, find its opposite.
// 
// Examples:
// 
// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
  return -number
}

// Nathan loves cycling.
// 
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// 
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// 
// For example:
// 
// time = 3 ----> litres = 1
// 
// time = 6.7---> litres = 3
// 
// time = 11.8--> litres = 5
function litres(time) {
  return Math.floor(time/2)
}

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// 
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// 
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
function minMax(arr){
  if(arr.length === 1){
    return [arr[0],arr[0]]
  }else{
  arr.sort(function(a, b) {
    return a - b //sorting from lowest to highest integer
  })
  let low = arr.shift()
  let high = arr.pop()
  return [low, high]
  }
}
minMax([1,5,2,1000])
//tweaked a bit:
function minMax(arr){
  if(arr.length === 1){
    return [arr[0],arr[0]]
  }else{
    arr.sort(function(a, b) {
      return a - b
  })
  return [arr.shift(), arr.pop()]
  }
}
minMax([1,5,2,1000])
//Much better:
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]; //Math.min()
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// 
// For example,
// 
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// 
// Hint: Don't forget to check for bad values like null/undefined
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(sheep => sheep === true).length
}
//or
let countSheeps = arrayOfSheep => arrayOfSheep.filter(sheep => sheep === true).length
//
function test(arr){
  return arr.sort((a,b)=> a - b)
}
test([1,5,2])

// Given an array of integers, return a new array with each value doubled.
// 
// For example:
// 
// [1, 2, 3] --> [2, 4, 6]
function maps(x){
  return x.map(x => x * 2);
}
//arrow
let maps = x => x.map(x => x * 2)