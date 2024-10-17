// https://www.codewars.com/kata/667dfbaa4570b2db26aedc8c/
//
// Description
// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size.
//
// Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.
//
// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)
//
// The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.
//
// (For sizes where x modifier makes total size negative, treat that as OK, and return negative size)
//
// Invalid cases
// Function should handle wrong/invalid sizes.
//
// Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
// Notice that you cannot apply modifier for m size, consider that case as invalid!
// Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).
//
// Invalid examples: xxx, sss, xm, other string
//
// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42
//
// function sizeToNumber(size) {
//     return 0 ?? null ;
//   }

function sizeToNumber(size) {
  if (typeof size !== "string") return null;

  const baseSizes = { s: 36, m: 38, l: 40 };
  const baseSizeMatch = size.match(/[sml]$/);
  const modifiersMatch = size.match(/^x*/);

  if (!baseSizeMatch || (baseSizeMatch[0] === "m" && modifiersMatch[0]))
    return null;

  const baseSize = baseSizeMatch[0];
  const modifiers = modifiersMatch[0];

  if (size.replace(modifiers, "").replace(baseSize, "").length > 0) return null;

  const baseValue = baseSizes[baseSize];
  const modifierCount = modifiers.length;

  if (baseSize === "s") {
    return baseValue - 2 * modifierCount;
  } else if (baseSize === "l") {
    return baseValue + 2 * modifierCount;
  } else {
    return baseValue;
  }
}
