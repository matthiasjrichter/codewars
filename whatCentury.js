// https://www.codewars.com/kata/52fb87703c1351ebd200081f
//
// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.
//
// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"
//
// function whatCentury(year)
// {
//   // code must go here
// }

function whatCentury(year) {
  const century = Math.ceil(+year / 100), lastTwo = century % 100, lastOne = century % 10;

  let suffix = "th";
  if (lastTwo < 11 || lastTwo > 13) {
    if (lastOne === 1) suffix = "st";
    else if (lastOne === 2) suffix = "nd";
    else if (lastOne === 3) suffix = "rd";
  }

  return century + suffix;
}
