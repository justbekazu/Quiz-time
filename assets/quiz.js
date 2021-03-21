var playersName = window.prompt("Please enter your name");
alert(" welcome " + playersName);

document.getElementsByClassName("welcome banner").appendChild("Welcome" + playersName);

//once a player hits enter first question is displayed and the timer starts

//once a player selects an answer an alert says right (true) or wrong (false) and goes to the next question
//for a right answer the player gets 5 points and for a worng answer the player is deducted 5 points
//a tally is kept for a final score and after the last question is answered the player is given their final score

var question1Options = ["a boomrang", "a true or false question", "a long line of code", "bad coding"];

var question2Options = ["hyper text markup language", "here then make longer", "help the margin length", "how to mark logs"];

var qeustion3Options = [";", "#", "+", "()"];

var question4Options = ["make your website interactive", "you can change text and colors", "you can make alerts", "all of the above"];

var question5Options = ["it is a statment that will run if a condition is false", "it is a statment that will run if the condition is true", "it is the if then less than statment", "it will enable a user to loop audio and video"];

var question1 = "What is a boolean?" 

var question2 = "What does HTML stand for?" 
 
var question3 = "How do you start a funtion?" 

var question4 = "What can you use Javascript to do?" 

var question5 = "what is a for loop?"

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');