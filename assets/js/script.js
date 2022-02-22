var timer = 555;
var currentQuestionIndex = 0;
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#question-choices");
var time = document.querySelector("#time");
var wordsMain = document.querySelector("#p1");
var btnStart = document.querySelector("#start-button");
var response = document.createElement("div");
var start = document.querySelector("#words-main");
var finalEl = document.querySelector("#final-page");

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

function endQuiz() {
  questionsEl.setAttribute("class", "hide");
  finalEl.removeAttribute("class");
  //   localStorage.getItem("");
}

function startQuizButton() {
  start.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  getQuestion();

  function endPrompt() {
    alert("Time ran out!");
    clearInterval(myInterval);
    endQuiz();
  }
  function tick_timer() {
    timer = timer - 1;
    time.innerHTML = "Time: " + timer;
    if (currentQuestionIndex === 2) {
      console.log(currentQuestionIndex);
      clearInterval(myInterval);
    }
    if (timer < 0) {
      endPrompt();
      time.innerHTML = "Time: 0";
    }
  }
  var myInterval = setInterval(tick_timer, 1000);
}

function questionClick(event) {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    getQuestion();
  } else {
    currentQuestionIndex++;
    endQuiz();
  }
  if (event.currentTarget.value === questions[currentQuestionIndex].answer) {
    choicesEl.appendChild(response);
    response.innerHTML = "Right!";
  } else {
    choicesEl.appendChild(response);
    response.innerHTML = "Wrong!";
    timer = timer - 10;
  }
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
