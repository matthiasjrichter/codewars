// https://www.codewars.com/kata/586a1af1c66d18ad81000134
//
// Introduction
// In the United Kingdom, the driving licence is the official document which authorises its holder to operate various types of motor vehicle on highways and some other roads to which the public have access. In England, Scotland and Wales they are administered by the Driver and Vehicle Licensing Agency (DVLA) and in Northern Ireland by the Driver & Vehicle Agency (DVA). A driving licence is required in the UK by any person driving a vehicle on any highway or other road defined in s.192 Road Traffic Act 1988[1] irrespective of ownership of the land over which the road passes, thus including many which allow the public to pass over private land; similar requirements apply in Northern Ireland under the Road Traffic (Northern Ireland) Order 1981. (Source Wikipedia)
// Driving
// Task
// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
// Rules
// 1–5: The first five characters of the surname (padded with 9s if less than 5 characters)
//
// 6: The decade digit from the year of birth (e.g. for 1987 it would be 8)
//
// 7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)
//
// 9–10: The date within the month of birth
//
// 11: The year digit from the year of birth (e.g. for 1987 it would be 7)
//
// 12–13: The initial letter of the first name and middle name, padded with a 9 if no middle name
//
// 14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9
//
// 15–16: Two computer check digits. We will always use "AA"
// Your task is to code a UK driving license number using an Array of data. The Array will look like
//
// data = ["John","James","Smith","01-Jan-2000","M"];
// Where the elements are as follows
//
// 0 = Forename
// 1 = Middle Name (if any)
// 2 = Surname
// 3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
// 4 = M-Male or F-Female
// You will need to output the full 16 digit driving license number, in all UPPERCASE.
//
// Good luck and enjoy!
//
// function driver(data) {
//   // Code here
// }

// very clear:
function driver(data) {
  let [first, middle = "9", last, birthDate, gender] = data;
  birthDate = new Date(birthDate);
  let day = birthDate.getDate();
  let month = birthDate.getMonth() + 1;
  if (gender === "F") month += 50;
  let year = String(birthDate.getFullYear());

  let rule1 = last.slice(0, 5).padEnd(5, "9");
  let rule2 = year[2];
  let rule3 = String(month).padStart(2, "0");
  let rule4 = String(day).padStart(2, "0");
  let rule5 = year[3];
  let rule6 = first[0] + middle[0];
  let rule7 = "9";
  let rule8 = "AA";
  let result = rule1 + rule2 + rule3 + rule4 + rule5 + rule6 + rule7 + rule8;

  return result.toUpperCase();
}

// less verbose:
function driver(data) {
  let [first, middle = "9", last, birthDate, gender] = data;
  let date = new Date(birthDate);
  let year = String(date.getFullYear());
  
  let month = date.getMonth() + 1;
  if (gender === "F") month += 50;
  
  return (
    last.slice(0, 5).padEnd(5, "9") +
    year[2] +
    String(month).padStart(2, "0") +
    String(date.getDate()).padStart(2, "0") +
    year[3] +
    first[0] + middle[0] +
    "9AA"
  ).toUpperCase();
}