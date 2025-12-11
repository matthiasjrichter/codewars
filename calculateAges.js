// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1
//
// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:
//
// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative
//
// function getAges(sum,difference){
// };

// Robust and clear, best for production.
function getAges(sum,difference){
    if (sum < 0 || difference < 0) return null;
    const oldest = (sum + difference) / 2;
    const youngest = sum - oldest;
    if (oldest < 0 || youngest < 0) return null;
    return [oldest, youngest];
};

// A bit more concise with destructuring.
function getAges(sum,difference){
    if (sum < 0 || difference < 0) return null;
    const [oldest, youngest] = [(sum + difference) / 2, (sum - difference) / 2];
    if (oldest < 0 || youngest < 0) return null;
    return [oldest, youngest];
};

// Ternary. Might confuse some people. And no early return, slightly less efficient.
function getAges(sum,difference){
    const [oldest, youngest] = [(sum + difference) / 2, (sum - difference) / 2];
    return sum < 0 || difference < 0 || oldest < 0 || youngest < 0 ? null : [oldest, youngest];
};

// Clever one liner with default parameter. Just for fun, not for production!
const getAges = (sum, diff, old = (sum + diff) / 2, young = (sum - diff) / 2) => sum < 0 || diff < 0 || old < 0 || young < 0 ? null : [old, young];