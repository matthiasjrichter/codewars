// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// Trolls are attacking your comment section!
// 
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// 
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// 
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// 
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let result = "";

    for (const char of str) {
        if (!vowels.includes(char)) {
            result += char;
        }
    }

    return result;
}

//alternative
function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    return str.split("").filter(char => !vowels.includes(char)).join("")
}

//same but nicer to read
function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    return str
        .split("")
        .filter(char => !vowels.includes(char))
        .join("")
}

//this version uses a string to store the vowels instead of an array. Also makes it globally available which might be useful.
const vowels = 'aeiouAEIOU'

function disemvowel(str) {
    return str
        .split("")
        .filter(char => !vowels.includes(char))
        .join("")
}