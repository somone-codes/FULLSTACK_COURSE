const prefix = "images/dice";
const suffix = ".png";

console.log("Generating random number 1");
let randomNumber1= Math.floor((Math.random() * 6) + 1);
console.log("Generating random number 1");
let randomNumber2= Math.floor((Math.random() * 6) + 1);

let dom = document;

console.log("Fetching IMG elements")
images = dom.getElementsByTagName("img")
console.log("Setting SRC attribute for IMG element 1")
srcAttr = images[0].getAttribute("src")
images[0].setAttribute("src",prefix+randomNumber1+suffix)
console.log("Setting SRC attribute for IMG element 2")
images[1].setAttribute("src",prefix+randomNumber2+suffix)

console.log("Checking who won")
if (randomNumber1 > randomNumber2){
    console.log("Player 1 wins")
    title = "Player 1 wins"
}
else if (randomNumber1 < randomNumber2){
    console.log("Player 2 wins")
    title = "Player 2 wins"
}
else {
    console.log("Draw")
    title = "Draw!"
}
console.log("Fetching H1 element")
titleElement = dom.querySelector("h1")
console.log("Setting new text for H1 element")
titleElement.innerText = title