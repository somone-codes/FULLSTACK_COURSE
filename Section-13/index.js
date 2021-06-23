let dom = document
let log = console.log
let buttonElements = dom.querySelectorAll("button");

buttonElements.forEach((value) => {
   value.addEventListener("click", () => {
       playAudioWithAnimation(value.innerText);

    });
})
dom.addEventListener("keydown", (event)=> {
    playAudioWithAnimation(event.key);
})

function playAudioWithAnimation(key) {
    fetchAudioBasedOnKeyAndPlay(key);
    addKeyPressAnimation(key);
}

function fetchAudioBasedOnKeyAndPlay(key){
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
    }
    return audio.play();
}

function addKeyPressAnimation(key) {
    let button = dom.querySelector("." + key);
    button.classList.add("pressed");
    setInterval(() => {button.classList.remove("pressed");},100);
}

