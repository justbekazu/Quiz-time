var playersName = window.prompt("Please enter your name");
//{
//if (playersName == "") {
alert("get ready " + playersName);
//}
//vars needed for points
var playerScore = 0;
function playerScoreTotal() {}

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

const countdownEl = document.getElementById("countdown");
var timer;

const questions = [
  {
    question: "What is a boolean?",
    answers: [
      { text: "a boomrang", correct: false },
      { text: "a true or false question", correct: true },
      { text: "a long line of code", correct: false },
      { text: "bad coding", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "hyper text markup language", correct: true },
      { text: "here then make longer", correct: false },
      { text: "help the margin length", correct: false },
      { text: "how to mark logs", correct: false },
    ],
  },
  {
    question: "How do you start a funtion?",
    answers: [
      { text: ";", correct: false },
      { text: "#", correct: false },
      { text: "+", correct: false },
      { text: "()", correct: true },
    ],
  },
  {
    question: "What can you use Javascript to do?",
    answers: [
      { text: "make your website interactive", correct: false },
      { text: "you can change text and colors", correct: false },
      { text: "you can make alerts", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question: "what is a for loop?",
    answers: [
      {
        text: "it is a statment that will run if a condition is false",
        correct: false,
      },
      {
        text: "it is a statemtn that will run if a condition is ture",
        correct: false,
      },
      { text: "it is the if then less than statment", correct: false },
      { text: "it will enable a user to loop audio and video", correct: true },
    ],
  },
];

let time = questions.length * 5;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  setNextQuestion();
});

countdownEl.textContent = time;

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  console.log(shuffledQuestions);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  startNextQuestion();
  timer = setInterval(updateCountdown, 1000);
}
const startingTimer = 1;

function updateCountdown() {
  time--;
  // const minutes = Math.floor(time / 60);
  // let seconds = time % 60;
  console.log(time);
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  console.log(seconds);
  countdownEl.innerHTML = `${time}`;

  if (time <= 0) {
    clearInterval(timer);
  }
}

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   countdownEl.innerHTML = `${minutes}: ${seconds}`;
//   time--;
//   var s = seconds;

//   if (s == 0) {
//     if (m == 0) {
//       alert("done");
//     } else if (m != 0) {
//       m = m - 1;
//       s = 60;
//       t();
//     }
//   }
//   s = s - 1;
//   t();
//   function t() {
//     setTimeout(function () {
//       startTimer(m, s);
//     }, 1000);
//   }
//}

//if seconds === 0,

/*if (num <= 1) {
     return 1:
 }

 var r factor(60)
 */

function startNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  console.log(question);
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    console.log(answer);
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.setAttribute("correct", answer.correct);
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.datatset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    playersName();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
