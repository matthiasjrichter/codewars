// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// 
// Clock shows h hours, m minutes and s seconds after midnight.
// 
// Your task is to write a function which returns the time since midnight in milliseconds.
// 
// Example:
// h = 0
// m = 1
// s = 1
// 
// result = 61000
// Input constraints:
// 
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


//////////////
// Solution
// 1 s = 1000 ms
// 1 m = 60 s = 60000 ms
// 1 h = 60 m = 3600000 ms
// so h * 3600000 + m * 60000 + s * 1000

function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000
}


//alternative
const past = (h, m ,s) => h * 3600000 + m * 60000 + s * 1000

//test cases
past(0,1,1) //61000
past(1,1,1) //3661000
past(0,0,0) //0
past(1,0,1) //3601000
past(1,0,0) //3600000