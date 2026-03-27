// https://www.codewars.com/kata/5e16ffb7297fe00001114824
//
// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:
//
// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// Return the three product names with the highest revenues (amount * price), in descending order (highest to lowest revenue).
//
// Note: if multiple products have the same revenue, order them according to their original positions in the input list.
//
// function top3(products, amounts, prices) {
//   return
// }

function top3(products, amounts, prices) {
  return products
    .map((product, i) => ({
      name: product,
      revenue: amounts[i] * prices[i],
      index: i,
    }))
    .sort((a, b) => {
      if (b.revenue !== a.revenue) {
        return b.revenue - a.revenue;
      }
      return a.index - b.index;
    })
    .slice(0, 3)
    .map((item) => item.name);
}
