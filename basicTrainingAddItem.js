// https://www.codewars.com/kata/511f0fe64ae8683297000001
// 
// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]
// 
// The websites array has already been defined for you using the following code:
// 
// var websites = [];
// 
// // add the value "codewars" to the already defined websites array

//add at the end
websites.push("codewars")

//add at the beginning
websites.unshift("codewars")

//add at index 0
websites.splice(0, 0, "codewars")

//or
websites[0] = "codewars"