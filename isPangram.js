// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// 
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const alphabet = "abcdefghijklmnopqrstuvwxyz"; //outside of the function for future use

function isPangram(string) {
    
    const lowerCaseString = string.toLowerCase();

    for (const letter of alphabet) {
        if (!lowerCaseString.includes(letter)) {
            return false;
        }
    }
    return true;
}