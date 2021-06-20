/**
 * Returns the BMI of person given weight & height
 * @param {number} weight - weight of the person
 * @param {number} height - height of the person
 * @return {number} BMI
 */
function bmiCalculator(weight, height){
    console.log("Calculating BMI")
    return Math.floor(weight / (height * height));
}

const weight = 65;
const height = 1.8;
const bmi = bmiCalculator(weight, height);

console.log(`BMI of a person with weight ${weight} and height ${height} is ${bmi}`)