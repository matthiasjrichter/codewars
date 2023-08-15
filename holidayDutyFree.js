// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
// 
// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
// 
// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
// 
// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
// 
// All inputs will be integers. Please return an integer. Round down.
/////


//My notes
//Inputs are normPrice (normal price for a bottle), discount (the discount in %), hol (cost of holiday)
//We want to return how many bottles we need to buy to break even. However, we should round down (which doesn't make sense, but that's what we are asked to do)
//First we find the discount in £
//Then we divide the holiday cost by that discount
//Last we round down and return the reult

function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / ((normPrice * discount) / 100))
}

//alternative
const dutyFree = (normPrice, discount, hol) => Math.floor(hol / ((normPrice * discount) / 100))

//readable
function dutyFree(normPrice, discount, hol) { //normPrice: normal price for a bottle, discount: discount in %, hol: cost of holiday
    let discountInPounds = (normPrice * discount) / 100 //calculate disount in £
    let bottlesNeeded = hol / discountInPounds //holiday cost divided by discount in £
    return Math.floor(bottlesNeeded) //round down and return result
}