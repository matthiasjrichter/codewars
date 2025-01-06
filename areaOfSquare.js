// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/
// 
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(arcLength) {
    const radius = arcLength / (Math.PI / 2);
    const diagonal = 2 * radius;
    const sideLength = diagonal / Math.sqrt(2);
    const area = sideLength * sideLength;

    return +area.toFixed(2)/2;
}
