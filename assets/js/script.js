var timer = 5555;
var currentQuestionIndex = 0;
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#question-choices");
var time = document.querySelector("#time");
var wordsMain = document.querySelector("#p1");
var btnStart = document.querySelector("#start-button");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var response = document.createElement("div");
var start = document.querySelector("#words-main");

var questions = [
  {
    title: "Question #1: What is your favorite letter?",
    choices: ["A", "B", "C", "D"],
    answer: "A",
  },
  {
    title: "question 2",
    choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answer: "answer 1",
  },
];

// var allBtns = document.querySelector("#btn-1", "#btn-2", "#btn-3", "#btn-4");
// var showMe1 = function () {
//   btn1.style.backgroundColor = "purple";
//   document.getElementById("words-main").appendChild(response);
//   response.innerHTML = "Right/Wrong";
//   response.style.margin = "50px";
//   response.style.borderTop = "solid";
//   response.style.borderTopColor = "darkgray";
//   response.style.width = "800px";
//   response.style.color = "darkgray";
//   response.style.fontSize = "24px";
// };
// var showMe2 = function () {
//   btn2.style.backgroundColor = "purple";
// };
// var showMe3 = function () {
//   btn3.style.backgroundColor = "purple";
// };
// var showMe4 = function () {
//   btn4.style.backgroundColor = "purple";
// };
function endQuiz() {}

function startQuizButton() {
  start.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  getQuestion();

  function endPrompt() {
    alert("Time ran out!");
    clearInterval(myInterval);
    return;
  }
  var tick_timer = function () {
    timer = timer - 1;
    time.innerHTML = "Time: " + timer;
    if (timer < 0) {
      endPrompt();
      time.innerHTML = "Time: 0";
    }
  };
  var myInterval = setInterval(tick_timer, 1000);
}

function questionClick(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === questions[currentQuestionIndex].answer) {
    console.log("Here");
    choicesEl.appendChild(response);
    response.innerHTML = "Right!";
  } else {
    console.log("There");
    choicesEl.appendChild(response);
    response.innerHTML = "Wrong!";
    timer = timer - 10;
  }

  currentQuestionIndex++;
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choiceNode.style.outline = "none";
    choiceNode.style.border = "none";
    choiceNode.style.padding = "10px 15px";
    choiceNode.style.color = "white";
    choiceNode.style.background = "darkslateblue";
    choiceNode.style.fontSize = "18px";
    choiceNode.style.borderRadius = "12px";
    choiceNode.style.top = "-3px";
    choiceNode.style.height = "65px";
    choiceNode.style.width = "200px";
    choiceNode.style.margin = "15px 0";
    choicesEl.appendChild(choiceNode);
  });
}

btnStart.addEventListener("click", startQuizButton);
