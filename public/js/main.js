//Pop up onload to get user name
//window.addEventListener("load", getUserDetails);

var userName = null;
var question = "How you doing?"
var answerA = "Answer A";
var answerB = "Answer B";
var answerC = "Answer C";
var answerD = "Answer D";

//uncomment when styling of HTML complete
// function getUserDetails() {

//     do {
//         userName = prompt("Please enter your name");
//         while(userName.length > 20) {
//             alert("Name is limited to 20 letters");
//             userName = null;
//         }
//     } while (userName = null);

//     play();

// }

//Populate the Question
function populateQuestion() {
    qHeader.innerHTML = question;
}

//Populate the answers
function populateAnswers() {
    let eleA = document.getElementById("answerA");
    eleA.innerHTML += ` ${answerA}`;

    let eleB = document.getElementById("answerB");
    eleB.innerHTML += ` ${answerB}`;

    let eleC = document.getElementById("answerC");
    eleC.innerHTML += ` ${answerC}`;

    let eleD = document.getElementById("answerD");
    eleD.innerHTML += ` ${answerD}`;
}

//Handle answer selection
document.getElementById("answerA").onmousedown = function () {
    console.log("User moused down A");
    return true; // Not needed, as long as you don't return false
};

document.getElementById("answerB").onmousedown = function () {
    console.log("User moused down B");
    return true; // Not needed, as long as you don't return false
};

document.getElementById("answerC").onmousedown = function () {
    console.log("User moused down C");
    return true; // Not needed, as long as you don't return false
};

document.getElementById("answerD").onmousedown = function () {
    console.log("User moused down D");
    return true; // Not needed, as long as you don't return false
};

//Run Game
function play() {

    //set up play game button - hide play button & show game items
    //triggers name input pop up
    //fetch questions - complex mix of subjects easy getting harder
    //receive questions and answers, randomize A to D, keep track of correct answers
    populateQuestion();
    populateAnswers();

    //get answer input
    //check input is correct
    //if correct congratulations & next question, update Prize Board
    //else Game Over

}

