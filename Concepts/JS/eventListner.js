let dom = document

let buttonElement = dom.querySelector("button");

function buttonClickAction(){
    console.log("I got clicked!")
    buttonElement.innerText = "I got clicked!"
}

buttonElement.addEventListener("click", buttonClickAction)