// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
// 
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// 
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// 
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// 
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
// 
// function howMuchILoveYou(nbPetals) {
//     // your code
// }

function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    nbPetals = nbPetals - 1
    nbPetals = nbPetals % 6
    return arr[nbPetals]
}

//arrow function and calculation in return
const howMuchILoveYou = (nbPetals) =>{
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    return arr[(nbPetals - 1) % 6];
}

//one line of fun and using pre-decrement operator
const howMuchILoveYou = (nbPetals) => ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][--nbPetals % 6];

//tests
howMuchILoveYou(3)// "a lot" <- this works
howMuchILoveYou(7)// "I love you"  <- this returns undefined