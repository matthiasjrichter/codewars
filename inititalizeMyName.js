// https://www.codewars.com/kata/5768a693a3205e1cc100071f
// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
// 
// You task is to initialize the middle names (if there is any).
// 
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
// 
// function initializeNames(name){
//   // Insert your brilliant code here
// }


function initializeNames(name){
    let nameArray = name.split(" ")
  
    if (nameArray.length <= 2) return name //early return if no inititals needed
  
    let firstName = nameArray.shift()
    let lastName = nameArray.pop()
    let middleNamesInitials = nameArray.map((element) => element[0] + ".").join(" ")
  
    return firstName + " " + middleNamesInitials + " " + lastName
  }
  
  
  //alternative
  function initializeNames(name) {
    return name
      .split(" ")
      .map((e, i, a) => (i == 0 || i == a.length - 1 ? e : e[0] + ".")) //if element is first or last returns it, else returns elements first char + "."
      .join(" ")
  }
  
  
  //one line
  const initializeNames = (name) => name.split(" ").map((e, i, a) => i === 0 || i === a.length - 1 ? e : e[0] + ".").join(" ")
  
  //test cases
  initializeNames ('Alice Betty Catherine Davis') //'Alice B. C. Davis'
  initializeNames ('Dimitri') //'Dimitri'
  initializeNames ('Jack Ryan') //'Jack Ryan'