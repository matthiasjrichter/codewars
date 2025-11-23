// https://www.codewars.com/kata/5981a139f5471fd1b2000071/javascript
// 
// Description:
// There are five workers : James, John, Robert, Michael and William. They work in a fixed order from Monday to Friday, and they rest on weekends. The order of work is as follows:
// 
// James works on Monday,
// 
// John works on Tuesday,
// 
// Robert works on Wednesday,
// 
// Michael works on Thursday,
// 
// William works on Friday.
// 
// Your task is to create a function that takes three arguments:
// 
// Weekday: The day of the week (e.g., Monday).
// 
// Number of Trees: The number of trees that must be sprayed on that day.
// 
// Cost per Litre: The cost of 1 litre of liquid needed to spray a tree. Assume that 1 tree requires 1 litre of liquid.
// 
// The total cost of the liquid to spray all trees is denoted as x.
// 
// The function should return a string in the following format:
// 
// 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'
// 
// Examples:
// Input :
// 
// Weekday : "Monday".
// 
// Number of Trees : 15
// 
// Cost per Litre : 2
// 
// Output:
// 
// "It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid."
// 
// function task(w, t, c) {
//   return w // your code
// }

// Concise and solves the kata
const s = new Map([["Monday", "James"], ["Tuesday", "John"], ["Wednesday", "Robert"], ["Thursday", "Michael"], ["Friday", "William"]]);

const task = (w, t, c) => `It is ${w} today, ${s.get(w)}, you have to work, you must spray ${t} trees and you need ${t * c} dollars to buy liquid`;

// More verbose, readable and robust. Input is expected to be clean, but let's have some fun with error handling.
const schedule = new Map([
  ["Monday", "James"],
  ["Tuesday", "John"],
  ["Wednesday", "Robert"],
  ["Thursday", "Michael"],
  ["Friday", "William"],
]);

function task(day, amount, cost) {
  if (!schedule.has(day)) throw new RangeError(`Day must be a workday, got: ${day}`);
  if (!Number.isInteger(amount)) throw new TypeError(`Amount must be integer, got ${typeof amount}`);
  if (!Number.isInteger(cost)) throw new TypeError(`Cost must be integer, got ${typeof cost}`);
  if (amount < 0) throw new RangeError("Amount cannot be negative");
  if (cost < 0) throw new RangeError("Cost cannot be negative");

  const total = amount * cost;
  const worker = schedule.get(day);

  return `It is ${day} today, ${worker}, you have to work, you must spray ${amount} trees and you need ${total} dollars to buy liquid`;
}