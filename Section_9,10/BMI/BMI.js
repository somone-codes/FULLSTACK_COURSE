/**
 * Returns the BMI message of person given BMI
 * @param {number} BMI
 * @return {string} BMI Message
 * */
function bmiMessage(bmi) {
    let response = "Your BMI is " + bmi + ", so you ";
    if (bmi <18.5){
        return response + "are underweight.";
    }
    else if ( bmi > 18.5 && bmi < 24.9){
        return response + "have a normal weight.";
    }
    else {
        return response + "are overweight."
    }

}

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

const weight = Number(prompt("Enter your weight in Kgs."));
const height = Number(prompt(" Enter your height in meters."));
const bmi = bmiCalculator(weight, height);

console.log(`BMI of a person with weight ${weight} and height ${height} is ${bmi}`)

const bmiMsg = bmiMessage(bmi);

console.log(bmiMsg)