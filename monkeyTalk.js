// https://www.codewars.com/kata/59f897ecc374cb9ed90000c2/
//
// Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
//
// function monkeyTalk(phrase){
//
// }

/////////////
//puuh this is interesting
// Expected: 'Ook eek eek eek ook.', instead got: 'Yyk IIk rrk ssk eek.'
// Expected: 'Ook ook.', instead got: 'Mmk yyk.'
// Expected: 'Eek ook ook.', instead got: 'Rrk uuk ssk.'
// Expected: 'Eek eek ook eek ook ook ook eek.', instead got: 'IIk ssk uuk ssk ssk yyk uuk eek.'
// Expected: 'Ook ook ook ook ook eek ook eek.', instead got: 'Uuk ook rrk ssk uuk eek uuk ssk.'
// Expected: 'Eek ook ook ook ook ook ook.', instead got: 'Rrk uuk mmk rrk mmk ssk ssk.'
// Expected: 'Eek ook eek eek ook ook eek.', instead got: 'IIk ssk eek rrk eek ook IIk.'
// Expected: 'Ook ook ook ook.', instead got: 'Ssk eek ook uuk.'
// Expected: 'Ook eek eek ook.', instead got: 'Eek eek ssk ssk.'
// Expected: 'Ook.', instead got: 'Ssk.'
// Expected: 'Eek eek ook ook eek ook ook ook ook ook eek ook ook.', instead got: 'IIk ssk uuk mmk IIk rrk ssk mmk rrk eek ssk rrk eek.'
// Expected: 'Eek ook ook eek eek ook eek ook ook eek eek ook ook.', instead got: 'IIk ssk yyk ddk rrk ssk ssk ssk ssk ssk rrk mmk ssk.'
// Expected: 'Ook eek ook ook ook ook ook.', instead got: 'Ssk rrk mmk mmk eek yyk eek.'
// Expected: 'Ook ook eek eek ook eek ook eek ook ook ook ook eek eek eek ook.', instead got: 'Ssk eek rrk eek ssk iik mmk ddk ssk ook ssk eek iik iik rrk rrk.'
// Expected: 'Ook eek ook eek ook ook ook ook.', instead got: 'Uuk ddk eek rrk uuk eek ook ook.'
// Expected: 'Ook ook ook eek ook ook ook ook eek ook.', instead got: 'Ook mmk eek ddk yyk ook ssk mmk ssk ssk.'
// Expected: 'Ook ook ook eek eek eek ook ook ook eek eek ook eek eek.', instead got: 'Ook ssk ssk ssk ssk rrk yyk rrk yyk ssk rrk eek IIk IIk.'
// Expected: 'Eek eek eek eek eek eek ook eek ook ook ook eek eek ook.', instead got: 'IIk iik rrk ssk IIk ssk eek rrk ssk ssk ssk rrk IIk eek.'
// Expected: 'Ook.', instead got: 'Ssk.'
// Expected: 'Ook ook eek ook ook eek eek ook eek eek ook eek eek eek ook.', instead got: 'Uuk rrk eek rrk yyk ssk ddk ssk ssk eek ssk ssk rrk IIk eek.'
// Expected: 'Eek ook eek ook eek ook eek ook eek eek ook eek eek eek.', instead got: 'Ssk mmk iik ssk rrk ssk ssk ssk ddk ddk mmk ssk eek ddk.'
// Expected: 'Ook ook ook ook ook.', instead got: 'Ssk uuk ssk mmk mmk.'
// Expected: 'Ook ook ook ook eek ook ook eek eek eek.', instead got: 'Ssk eek ssk uuk ssk ssk rrk rrk ddk ssk.'
// Expected: 'Eek ook eek ook ook eek.', instead got: 'IIk ssk ddk rrk ssk eek.'
// Expected: 'Eek eek eek eek ook eek ook ook ook ook ook.', instead got: 'Rrk eek ssk ssk uuk rrk uuk yyk ook ssk rrk.'
// Expected: 'Ook ook eek ook eek ook eek ook.', instead got: 'Ssk uuk ddk mmk rrk yyk IIk uuk.'
// Expected: 'Ook eek ook ook eek eek eek ook ook eek eek.', instead got: 'Rrk ssk ssk mmk ssk IIk ddk ssk mmk ssk IIk.'
// Expected: 'Ook eek ook ook eek eek ook ook ook ook.', instead got: 'Ssk IIk ssk mmk ddk ssk eek yyk ssk mmk.'
// Expected: 'Eek eek ook ook ook eek.', instead got: 'Iik IIk eek rrk yyk ssk.'
// Expected: 'Eek eek eek eek eek eek ook ook eek ook eek eek ook ook ook.', instead got: 'Iik eek IIk rrk iik IIk eek rrk ssk ook ddk ddk eek ssk ssk.'
/////
// so
// Eek: ee
// Ook: yirsm
// that doesn't work
// maybe the string length determines if Eek or Ook? Nope, that's not how it works.
// maybe the char the word starts with? vowel => eek? That's it! Heureka!!!!

function monkeyTalk(phrase) {
  let vowels = "aeiouAEIOU";
  let arr = phrase.split(" ").map((e) => (vowels.includes(e[0]) ? "eek" : "ook"));
  return arr[0][0].toUpperCase() + arr.join(" ").slice(1) + ".";
}

//tests
monkeyTalk("Hello"); // 'Ook.'
monkeyTalk("Everyone"); // 'Eek.'
monkeyTalk("Hello Everyone"); // 'Ook eek.'
monkeyTalk("Everyone Hello"); // 'Eek ook.'
