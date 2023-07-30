// https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
// The function is not returning the correct values. Can you figure out why?
// 
// Example (Input --> Output ):
// 
// 3 --> "Earth"

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//       case 2:
//         name = 'Venus'
//       case 3:
//         name = 'Earth'
//       case 4:
//         name = 'Mars'
//       case 5:
//         name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         name = 'Uranus'
//       case 8:
//         name = 'Neptune'
//     }
//     
//     return name;
//   }



function getPlanetName(id) {
    var name;
    switch (id) {

        case 1:
            return 'Mercury'
            break;
        case 2:
            return 'Venus'
            break;
        case 3:
            return 'Earth'
            break;
        case 4:
            return 'Mars'
            break;
        case 5:
            return 'Jupiter'
            break;
        case 6:
            return 'Saturn'
            break;
        case 7:
            return 'Uranus'
            break;
        case 8:
            return 'Neptune'
            break;
    }

}