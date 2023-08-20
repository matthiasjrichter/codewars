// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    let result = []
    let area = 2 * ((width * height) + (height * depth) + (depth * width))
    let volume = width * height * depth
    result.push(area, volume)
    return result
}

//alternative

function getSize(width, height, depth) {
    let area = 2 * ((width * height) + (height * depth) + (depth * width))
    let volume = width * height * depth
    return Array(area, volume)
}

//another alternative
function getSize(width, height, depth) {
    let area = 2 * ((width * height) + (height * depth) + (depth * width))
    let volume = width * height * depth
    return [area, volume]
}

//one line for fun
const getSize = (width, height, depth) => [(2 * ((width * height) + (height * depth) + (depth * width))), (width * height * depth)]