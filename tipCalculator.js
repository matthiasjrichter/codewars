// https://www.codewars.com/kata/56598d8076ee7a0759000087
//
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
//
// You need to consider the following ratings:
//
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
//
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.
//
// function calculateTip(amount, rating) {
//
// }

function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "terrible") return 0;
  if (rating.toLowerCase() === "poor") return Math.ceil((amount * 5) / 100);
  if (rating.toLowerCase() === "good") return Math.ceil((amount * 10) / 100);
  if (rating.toLowerCase() === "great") return Math.ceil((amount * 15) / 100);
  if (rating.toLowerCase() === "excellent") return Math.ceil((amount * 20) / 100);
  return "Rating not recognised";
}

// https://www.codewars.com/kata/56598d8076ee7a0759000087
//
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
//
// You need to consider the following ratings:
//
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
//
// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.
//
// function calculateTip(amount, rating) {
//
// }

function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "terrible") return 0;
  if (rating.toLowerCase() === "poor") return Math.ceil((amount * 5) / 100);
  if (rating.toLowerCase() === "good") return Math.ceil((amount * 10) / 100);
  if (rating.toLowerCase() === "great") return Math.ceil((amount * 15) / 100);
  if (rating.toLowerCase() === "excellent") return Math.ceil((amount * 20) / 100);
  return "Rating not recognised";
}

//switch
function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
      case "terrible": return 0;
      case "poor": return Math.ceil(amount * 0.05);
      case "good": return Math.ceil(amount * 0.1);
      case "great": return Math.ceil(amount * 0.15);
      case "excellent": return Math.ceil(amount * 0.2);
      default: return "Rating not recognised";
    }
}

//test
calculateTip(20, "poor"); //0
calculateTip(20, "Excellent"); //4
