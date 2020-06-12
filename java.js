var startButton = document.getElementById("startButton");

var questionAsked = document.getElementById("questions");
var answerChoices = document.getElementById("answer");

var answer;
var questionOrder = 0;
var questions = [

{
    question: "How many championship rings does John Stockton have?",
    options: ["3", "2", "1", "0"],
    answer: "0"
},
{
    question: "Which NBA team did Larry Bird play for?",
    options:["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Miami Heat"],
    answer: "Boston Celtics"
},
{
    question: "Which player is displayed on the NBA logo?",
    options: ["Jerry West", "Michael Jordan", "Lebron James", "Blake Griffin"],
    answer: "Jerry West"
},
{
    question: "Which NBA team has the most wins?",
    options: ["Los Angeles Lakers", "Boston Celtics", "Golden State Warriors", "Brooklyn Nets"],
    answer: "Boston Celtics"
},
{
    question: "Who won the NBA Championship in 2015?",
    options: ["Houston Rockets","Los Angeles Clippers", "Milwaukee Bucks", "Golden State Warriors"],
    answer: "Golden State Warriors"
},
{
    question: "Which coach has the most wins in NBA history?",
    options: ["Don Nelson", "Greg Popovich", "Erik Spoelstra", "Steve Kerr"],
    answer: "Don Nelson"
}]

function generateQuestion() {

    answer = questions[questionOrder].answer

    questionAsked.textContent = questions[questionOrder].question;
    answerChoices.innerHTML = "";



    
}


