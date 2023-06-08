// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// Your task is to create a function that does four basic mathematical operations.
// 
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// 
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



//inputs: operator (string), value1 (number), value2 (number)
//return as number
//first check what operator is there, then do operation

function basicOp(operation, value1, value2){
    if( operation === '+' ) return value1 + value2
    else if( operation === '-' ) return value1 - value2
    else if( operation === '*' ) return value1 * value2
    else if( operation === '/' ) return value1 / value2
    else return "Error"
}

//switch
function basicOp(operation, value1, value2){
    switch (operation) {
        case '+':
            return value1 + value2
            break;
        case '-':
            return value1 - value2
            break;
        case '*':
            return value1 * value2
            break;
        case '/':
            return value1 / value2
            break;
        default:
            return 'Error'
            break;
    }
}

// Test cases

basicOp('+', 4, 7) //expected 11
basicOp('-', 15, 18) //expected -2
basicOp('*', 5, 5) //expected 25
basicOp('/', 49, 7) //expected 7
basicOp('e', 0, 42) //expected 'Error'