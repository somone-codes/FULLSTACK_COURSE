const cars = [
    {
        model: "Honda Civic",
        coloursByPopularity: ["black", "silver"],
        speedStats: {
            topSpeed: 140,
            zeroToSixty: 8.5
        }
    },
    {
        model: "Tesla Model 3",
        coloursByPopularity: ["red", "white"],
        speedStats: {
            topSpeed: 150,
            zeroToSixty: 3.2
        }
    }
];

const [honda, tesla="tesla", dummy="dummy"] = cars;
const [hondaTopColour] = honda.coloursByPopularity;
const [teslaTopColour] = tesla.coloursByPopularity;
const {
    speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
    speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty=20}
} = tesla;


console.log(" Array Destructuring")
console.log(cars)

console.log("Object Destructuring")
console.log(hondaTopSpeed)

console.log("Destruct with defaults whch is enforced if object not found, if found then objects value")
console.log(dummy)
