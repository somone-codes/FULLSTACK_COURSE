
var slicing = "I am going to slice the string after this comma in future, I am slicked!";
console.log("String I am going to slice -> " + slicing);
let indexOfComma = slicing.indexOf(",") + 1;
var slicedString = slicing.slice(indexOfComma) ;

console.log("Sliced string " + slicedString)

var lowerCaseString = "i am a lowercase string which would like to be converted to upper case;"
var convertedUpperCaseString = lowerCaseString.toUpperCase()

console.log(" String in lowerCase -> " + lowerCaseString)
console.log(" String in upperCase -> " + convertedUpperCaseString)
