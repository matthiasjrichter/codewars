// https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a
// can't copy and paste the assignment so please use the link above


function howMuchWater(water, load, clothes) {
    if (clothes < load) return "Not enough clothes";
    if (clothes > 2 * load) return "Too much clothes";
    
    return +(water * Math.pow(1.1, clothes - load)).toFixed(2);
}

const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const R = 0.082; 
    const T = temp + 273.15;
    
    const n1 = givenMass1 / molarMass1;
    const n2 = givenMass2 / molarMass2;
    
    const P_total = ((n1 + n2) * R * T) / volume;
    
    return P_total;
};

// I could probably do this in less lines but now I am tired. If you are reading this: Got outside, enjoy life, hug someone (with their consent)