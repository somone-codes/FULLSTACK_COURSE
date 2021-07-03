const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let level = 0;
let userClickedPattern = [];

//generate random number from 0 - 3 (as array starts from 0 and we have 4 colors only)
function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

//based on the color given
//fetch the div with that class color and animate
function animateButton(color){
    $("div#" + color).fadeOut(100)
        .fadeIn(100).fadeOut(100)
        .fadeIn(100);
}

//play audio based on color given.
function fetchAudioBasedOnColorAndPlay(color){
    let audio;
    switch (color) {
        case 'red':
            audio = new Audio("sounds/red.mp3");
            break;
        case 'yellow':
            audio = new Audio("sounds/yellow.mp3");
            break;
        case 'green':
            audio = new Audio("sounds/green.mp3");
            break;
        case 'blue':
            audio = new Audio("sounds/blue.mp3");
            break;
        case 'wrong':
            audio = new Audio("sounds/wrong.mp3");
            break;
    }
    return audio.play();
}

// fetch title element and change title to show level
// if level >0 else show original title
function fetchAndChangeTitleElement() {
    let titleElement = $("h1#level-title");
    if (level == 0){
        titleElement.text("Game Over, Press Any Key to Restart.");
    }
    else {
        titleElement.text("Level " + level);
    }

}

//increment level
//fetch random color and push to gamePattern
//animate random button
//play sound of button
//change title to show level or start game
function highlightNextColor(){
    let randomChosenColor;
    level++;
    randomChosenColor = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColor);
    console.log("Next color is " + randomChosenColor)
    animateButton(randomChosenColor);
    fetchAudioBasedOnColorAndPlay(randomChosenColor);
    fetchAndChangeTitleElement();
}

//check if two arrays are equal
function arraysEqual(a, b) {
    if (a === b) return true;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

//validate if user is clicking right buttons
function validateRightButtonOrderPressedByUser() {
    let userClickedPatternLength = userClickedPattern.length;
    let gamePatternLength = gamePattern.length;

    if(userClickedPattern.length > gamePatternLength){
        return false;
    }
    else if(userClickedPattern.length === gamePatternLength){
        return arraysEqual(userClickedPattern, gamePattern)
    }
    else if (gamePatternLength>userClickedPatternLength){
        return arraysEqual(userClickedPattern, gamePattern.slice(0, userClickedPatternLength));
    }
    return false;
}

//reset level and patterns
function reset() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}


//on error reset game to start
//play wrong button clicked audio
//change title to game start
function error() {
    reset();
    fetchAudioBasedOnColorAndPlay("wrong");
    let body = $('body');
    body.addClass("game-over");
    let intervalID = setInterval(() => {
        console.log("removing game over class from body.");
        body.removeClass("game-over");
    },300);
    setTimeout(()=>{
        clearInterval(intervalID);
    }, 400);
    fetchAndChangeTitleElement();
}

//when user clicks button
// if game started i.e level >0 else log to start game/ alert user
//fetch the button clicked and push it to array to track all buttons clicked
//animate the button clicked
//play sound for button
//validate if right button click if not error if yes continue
function buttonClickHandler(event){
    if (level > 0){
        let userChosenColour = event.target.id;
        console.log("User picked color is "  +userChosenColour);
        userClickedPattern.push(userChosenColour);
        animateButton(userChosenColour);
        fetchAudioBasedOnColorAndPlay(userChosenColour);
        if (validateRightButtonOrderPressedByUser()){
            if(userClickedPattern.length === gamePattern.length){
                let intervalID = setTimeout(() => {
                    console.log("delay showing next item for 300ms");
                },500);
                //clearInterval(intervalID);
                highlightNextColor();
                userClickedPattern=[];
            }
        }
        else{
            error();
        }
    }else {
        console.log("Please start the game before clicking buttons");
    }
}

//if user clicks button, take action
$("div.btn").on("click", buttonClickHandler);

//if user clicks key, take action
//to start game if already started do nothing
$(document).on("keypress", ()=>{
    if (level === 0){
        highlightNextColor();
    }
});