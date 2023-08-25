// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// 
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// 
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// 
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// 
// Example: (input --> output)
// 
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna) {
    let dnaArr = dna.split("");
    let dnaComplementaryArr = dnaArr.map(symbol => {
        if (symbol === "A") return "T";
        else if (symbol === "T") return "A";
        else if (symbol === "C") return "G";
        else if (symbol === "G") return "C";
    });
    return dnaComplementaryArr.join("");
}

//alternative with switch case and different (clearer?) variable names:
function DNAStrand(dna) {
    let bases = dna.split("");
    let complements = bases.map(symbol => {
        switch (symbol) {
            case "A": return "T";
            case "T": return "A";
            case "C": return "G";
            case "G": return "C";
        };
    });
    return complements.join("");
}

//we can also work with the string directly without converting it to an array:
function DNAStrand(dna) {
    let result = "";
    for (const symbol of dna) {
        if (symbol === "A") {
            result += "T";
        } else if (symbol === "T") {
            result += "A";
        } else if (symbol === "C") {
            result += "G";
        } else if (symbol === "G") {
            result += "C";
        }
    }
    return result;
}

//same but using switch. 
function DNAStrand(dna) {
    let result = "";
    for (const symbol of dna) {
        switch (symbol) {
            case "A": result += "T";
                break;
            case "T": result += "A";
                break;
            case "C": result += "G";
                break;
            case "G": result += "C";
                break;
        }
    }
    return result;
}