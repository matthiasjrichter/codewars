// https://www.codewars.com/kata/5b609ebc8f47bd595e000627/
//
// Your job is to find the gravitational force between two spherical objects (obj1 , obj2).
//
// input
// Two arrays are given :
//
// arr_val (value array), consists of 3 elements
// 1st element : mass of obj 1
// 2nd element : mass of obj 2
// 3rd element : distance between their centers
// arr_unit (unit array), consists of 3 elements
// 1st element : unit for mass of obj 1
// 2nd element : unit for mass of obj 2
// 3rd element : unit for distance between their centers
// mass units are :
//
// kilogram (kg)
// gram (g)
// milligram (mg)
// microgram (μg)
// pound (lb)
// distance units are :
//
// meter (m)
// centimeter (cm)
// millimeter (mm)
// micrometer (μm)
// feet (ft)
// Note
// value of G = 6.67 × 10−11 N⋅kg−2⋅m2
//
// 1 ft = 0.3048 m
//
// 1 lb = 0.453592 kg
//
// return value must be Newton for force (obviously)
//
// μ copy this from here to use it in your solution
//
// solution = (arr_val, arr_unit) => {
//     // you code goes here
//   };

function solution(arr_val, arr_unit) {
  const G = 6.67e-11; // Gravitational constant in N·kg^-2·m^2

  // Conversion factors to kilograms for mass units
  const massToKg = {
    kg: 1,
    g: 0.001,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
  };

  // Conversion factors to meters for distance units
  const distanceToM = {
    m: 1,
    cm: 0.01,
    mm: 0.001,
    μm: 1e-6,
    ft: 0.3048,
  };

  // Extract values and units from input arrays
  const [m1_val, m2_val, r_val] = arr_val;
  const [m1_unit, m2_unit, r_unit] = arr_unit;

  // Convert each value to standard units (kg and meters)
  const m1 = m1_val * massToKg[m1_unit];
  const m2 = m2_val * massToKg[m2_unit];
  const r = r_val * distanceToM[r_unit];

  // Calculate the gravitational force
  const force = (G * (m1 * m2)) / (r * r);

  return force;
}

// more concise
function solution([m1_val, m2_val, r_val], [m1_unit, m2_unit, r_unit]) {
  const G = 6.67e-11;
  const massToKg = { kg: 1, g: 1e-3, mg: 1e-6, μg: 1e-9, lb: 0.453592 };
  const distanceToM = { m: 1, cm: 1e-2, mm: 1e-3, μm: 1e-6, ft: 0.3048 };
  const m1 = m1_val * massToKg[m1_unit];
  const m2 = m2_val * massToKg[m2_unit];
  const r = r_val * distanceToM[r_unit];
  return (G * m1 * m2) / (r * r);
}
