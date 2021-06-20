
const lover1 = prompt("Please enter the name of the first lover");
const lover2 = prompt("Please enter the name of the second lover");

function calculateLovePercent(){
    console.log("Calculating love % ")
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}
const lovePerCent = calculateLovePercent();

if (lovePerCent > 70) {
    alert(`Lover percentage between ${lover1} and ${lover2} is ${lovePerCent}. WOW that' s impressive!!`);
}
else if (lovePerCent > 30 && lovePerCent <= 70){
    alert(`Lover percentage between ${lover1} and ${lover2} is ${lovePerCent}.`);
}
else{
    alert(`Lover percentage between ${lover1} and ${lover2} is ${lovePerCent}. You guys go together like water and oil.`);
}
