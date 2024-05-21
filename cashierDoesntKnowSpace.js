// https://www.codewars.com/kata/5d23d89906f92a00267bb83d
//
// Some new cashiers started to work at your restaurant.
//
// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
//
// All the orders they create look something like this:
//
// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
//
// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
//
// Their preference is to get the orders as a nice clean string with spaces and capitals like so:
//
// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
//
// The kitchen staff expect the items to be in the same order as they appear in the menu.
//
// The menu items are fairly simple, there is no overlap in the names of the items:
//
// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke
//
// function getOrder(input) {
//     return "";
//   }

//replaceAll()
function getOrder(input) {
  const cleanedInput = input
    .replaceAll("burger", "Burger ")
    .replaceAll("fries", "Fries ")
    .replaceAll("chicken", "Chicken ")
    .replaceAll("pizza", "Pizza ")
    .replaceAll("sandwich", "Sandwich ")
    .replaceAll("onionrings", "Onionrings ")
    .replaceAll("milkshake", "Milkshake ")
    .replaceAll("coke", "Coke ")
    .trim();

  const menuOrder = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];

  return cleanedInput.split(" ").sort((a, b) => menuOrder.indexOf(a) - menuOrder.indexOf(b)).join(" ");
}


//test
getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"); //"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"