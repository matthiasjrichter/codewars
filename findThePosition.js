// https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
// When provided with a letter, return its position in the alphabet.
// 
// Input :: "a"
// 
// Ouput :: "Position of alphabet: 1"

function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}` //"a" is 97, "b" is 98 and so on
}

//to also account for uppercase we can add toLowerCase()
function position(letter) {
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`
}

//arrow syntax
const position = letter => `Position of alphabet: ${letter.charCodeAt(0) - 96}`