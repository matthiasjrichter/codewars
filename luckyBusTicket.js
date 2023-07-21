// https://www.codewars.com/kata/58902f676f4873338700011f/train/javascript
// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.
// 
// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(

function isLucky(ticket){

    let firstThree = Number(ticket.charAt(0)) + Number(ticket.charAt(1)) + Number(ticket.charAt(2))
    let lastThree = Number(ticket.charAt(3)) + Number(ticket.charAt(4)) + Number(ticket.charAt(5)) //Number(ticket[num]) works, too!

    if(!isNaN(ticket) === true && ticket.length === 6 && firstThree === lastThree){
        return true
    } 
    else return false
}

//alternative
function isLucky(ticket){

    let firstThree = Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2])
    let lastThree = Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5])

    return !isNaN(ticket) === true && ticket.length === 6 && firstThree === lastThree
}