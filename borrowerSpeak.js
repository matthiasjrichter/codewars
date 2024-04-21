// https://www.codewars.com/kata/57d2ba8095497e484e00002e
//
// The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.
//
// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.
//
// The young borrowers have begged their parents to stop using caps and punctuation.
//
// Change the input text s to new borrower speak. Help save the next generation!
//
// function borrow(s){
// }

function borrow(s) {
  return s.replace(/[!.,?;: ]/gi, "").toLowerCase();
}

//arrow function
const borrow = (s) => s.replace(/[!.,?;: ]/gi, "").toLowerCase();

//alternative
const borrow = (s) => s.toLowerCase().replace(/[^a-z]/g, "");

//test
borrow("THE big PeOpLE Here!!"); // 'thebigpeoplehere'
