//Pop up onload to get user name
//window.addEventListener("load", getUserDetails);

var userName = null;
var question = "";
let randomised = [];
let index = 0;
let questions;
let answer;
let locked = true;
let score = 0;
//uncomment when styling of HTML complete
// function getUserDetails() {

//     do {
//         userName = prompt("Please enter your name");
//         while(userName.length > 20) {
//             alert("Name is limited to 20 letters");
//             userName = null;
//         }
//     } while (userName = null);

       //hide play button
     play();

// }

//Populate the Question
function populateQuestion(question) {
    qHeader.innerHTML = question;
}

//Populate the answers
function populateAnswers(randomised) {
    let eleA = document.getElementById("answerA");
    eleA.innerHTML = `A: `;
    eleA.innerHTML += ` ${randomised[0]}`;

    let eleB = document.getElementById("answerB");
    eleB.innerHTML = `B: `;
    eleB.innerHTML += ` ${randomised[1]}`;

    let eleC = document.getElementById("answerC");
    eleC.innerHTML = `C: `;
    eleC.innerHTML += ` ${randomised[2]}`;

    let eleD = document.getElementById("answerD");
    eleD.innerHTML = `D: `;
    eleD.innerHTML += ` ${randomised[3]}`;

    locked = false;
}

        //Handle answer selection
        document.getElementById("answerA").onmousedown = function () {
            if (locked === false) {
                //console.log("User moused down A");
                locked = true;
                checkAnswer(0);
            }
        };
        
        document.getElementById("answerB").onmousedown = function () {
            if (locked === false) {
                //console.log("User moused down B");
                locked = true;
                checkAnswer(1);
            }
        };
        
        document.getElementById("answerC").onmousedown = function () {
            if (locked === false) {
                //console.log("User moused down C");
                locked = true;
                checkAnswer(2);
            }
        };
        
        document.getElementById("answerD").onmousedown = function () {
            if (locked === false) {
                //console.log("User moused down D");
                locked = true;
                checkAnswer(3);
            }
        };

//consider passing in the level for deciding on the easy/medium/hard
async function getQuestions() {
    let response = await fetch(`https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple`);
    let json = await response.json();
    questions = json["results"];
    index = 0;
    console.log(questions);
    populateQuestion(questions[index].question);
    answer = questions[index].correct_answer;
    let wrongAs = questions[index].incorrect_answers;
    randomised = randomiseAs(answer, wrongAs);
    populateAnswers(randomised);

}

function nextQuestion() {
    if (index === 5) {
        console.log("getting new qs");
        getQuestions();
    } 
    else {
        populateQuestion(questions[index].question);
        answer = questions[index].correct_answer;
        let wrongAs = questions[index].incorrect_answers;
        randomised = randomiseAs(answer, wrongAs);
        populateAnswers(randomised);
    }
}

function randomiseAs(answer, wrongAs) {
    let i = Math.floor(Math.random() * 5);
    wrongAs.splice(i,0, answer);
    return randomised = [...wrongAs];
}

function checkAnswer(uAnswerI) {
   
    //compare user answer to answer
    if (answer === randomised[uAnswerI]) {
        alert("Congratulations, you were correct");
        index++;
        score++;
        updatePrizeBoard();
        nextQuestion();
        return true;
    }
    else {
        alert("Sorry, that was not the correct answer");
        //reset prize board
        let prize = score.toString();
        let eleLiOld = document.getElementById(prize);
        eleLiOld.classList.remove('selected');
        index = 0;
        score = 0;
        play();
        return false;
    }

}

function updatePrizeBoard() {
    let prize = score.toString();
    if (prize > 0) {
        let eleLiOld = document.getElementById(prize-1);
        eleLiOld.classList.remove('selected');
    }
    let eleLi =  document.getElementById(`${prize}`);
    eleLi.classList.add('selected');
}

//Run Game
function play() {

    //set up play game button - hide play button & show game items
    //triggers name input pop up
    //fetch questions - complex mix of subjects easy getting harder

    //5 Easy
    //https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple
    //5 medium
    //https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple
    //5 hard
    //https://opentdb.com/api.php?amount=5&category=9&difficulty=hard&type=multiple

    //receive questions and answers, randomize A to D, keep track of correct answers
    getQuestions();
    updatePrizeBoard();

    //if correct congratulations & next question, update Prize Board
    //else Game Over

}


