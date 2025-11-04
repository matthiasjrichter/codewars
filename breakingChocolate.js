// https://www.codewars.com/kata/534ea96ebb17181947000ada
// 
// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// 
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// 
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
// 
// function breakChocolate(n,m) {
//   return 0;
// }

function breakChocolate(n, m) {
  if (n <= 0 || m <= 0) return 0;
  return n * m - 1;
}

// Arrow function and ternary
const breakChocolate = (n, m) => !n || !m ? 0 : n * m - 1;

//Alternative
const breakChocolate = (n, m) => n && m ? n * m - 1 : 0;