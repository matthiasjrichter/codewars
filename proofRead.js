// https://www.codewars.com/kata/583710f6b468c07ba1000017
//
// You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:
//
// a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)
//
// b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.
//
// Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.

function proofread(str) {
  let arr = str.toLowerCase().replaceAll("ie", "ei").split(". ");
  return arr.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(". ");
}

//single line for fun. RegExp
const proofread = (str) => str.toLowerCase().replace(/ie/g, "ei").split(". ").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(". ");

//test
proofread("ShE deCIeved HiM.");
