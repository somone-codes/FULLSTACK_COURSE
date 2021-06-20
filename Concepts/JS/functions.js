
/**
 * Return the string converted to upper case
 * @param  {string} toCovertString - The string
 * @return {string}
 */
function lowerToUpper(toCovertString) {
    console.log("Starting converting lower case string -> upper case")
    return toCovertString.toUpperCase();
    console.log("Finished converting lower case string -> upper case")
}

const lowerCaseString = "i am a lowercase string which would like to be converted to upper case;"
console.log(" String in lowerCase -> " + lowerCaseString)

const convertedUpperCaseString = lowerToUpper(lowerCaseString)
console.log(" String in upperCase -> " + convertedUpperCaseString)