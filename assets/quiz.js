var playersName = window.prompt("Please enter your name");
alert("get ready " + playersName);

function init(){
    var count = 0, timer = setInterval(function() {
        $("#counter").html((count++)+1);
        if(count == 59) clearInterval(timer);
    }, 1000);
}
console.log(init)

function startQuiz(){
    function init(){
        
    }
    }
//once a player hits enter first question is displayed and the timer starts

//once a player selects an answer an alert says right (true) or wrong (false) and goes to the next question
//for a right answer the player gets 5 points and for a worng answer the player is deducted 5 points
//a tally is kept for a final score and after the last question is answered the player is given their final score
//var showTheScore = ?
//keep track of the quiz answers and score
const myQuestions = [
    {
      question: "What is a boolean?",
      answers: [
        "a boomrang",
        "a true or false question",
        "a long line of code",
        "bad coding"
      ],
      correctAnswer: 1
    },
    {
      question: "What does HTML stand for?",
      answers: [
        "hyper text markup language",
        "here then make longer",
        "help the margin length",
        "how to mark logs"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you start a funtion?",
      answers: [
        ";",
        "#",
        "+",
        "()"
      ],
      correctAnswer: 3
    },
    {
    question: "What can you use Javascript to do?",
    answers: [
      "make your website interactive",   
      "you can change text and colors",
      "you can make alerts",
      "all of the above"
    ],
    correctAnswer: 3
    },
    {
    question: "what is a for loop?",
    answers: [
        "it is a statment that will run if a condition is false",
        "it is a statemtn that will run if a condition is ture",
        "it is the if then less than statment",
        "it will enable a user to loop audio and video",   
    ],
    correctAnswer: 1
    }]

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

var theQuestions = 0


function answerQuestions() {
    const aQuestion = myQuestions[theQuestions];
    var questionOne = aQuestion.question
        console.log(questionOne)
}

