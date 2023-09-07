// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
// 
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// 
// For example(Input --> Output):
// 
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    };
    return arr;
}

//alternative 1
function monkeyCount(n) {
    return Array.from({ length: n }, (_, index) => index + 1); //value is unused, so "_"
}

//alternative 2
function monkeyCount(n) { 
    return Array.from(Array(n), (value, index) => index + 1); 
}

monkeyCount(10) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]