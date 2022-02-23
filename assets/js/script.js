var timer = 75;
var currentQuestionIndex = 0;
var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#question-choices");
var timeEl = document.querySelector("#time");
var wordsMain = document.querySelector("#p1");
var btnStart = document.querySelector("#start-button");
var response = document.createElement("div");
var responseEl = document.querySelector("#response");
var start = document.querySelector("#words-main");
var finalEl = document.querySelector("#final-page");
var finalScoreEl = document.querySelector("#final-score");
var previousQuestionIndex = 0 - 1;
var formEl = document.querySelector("#form");

var questions = [
  {
    title: "Question #1: Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<javascript>", "<scripting>"],
    answer: "<script>",
  },
  {
    title: "Question #2: How do you write 'Hello World' in an alert box?",
    choices: [
      "msgBox('Hello World');",
      "alert('Hello World');",
      "alertBox('Hello World');",
      "msg('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    title: "Question #3: How do you write an IF statement in JavaScript?",
    choices: ["if i = 5", "if i = 5 then", "if i == 5 then", "if (i == 5)"],
    answer: "if (i == 5)",
  },
  {
    title: "Question #4: How does a FOR loop start?",
    choices: [
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <=5; i++)",
      "for (i = 0; i <= 5)",
    ],
    answer: "for (i = 0; i <=5; i++)",
  },
  {
    title:
      "Question #5: Which operator is used to assign a value to a variable?",
    choices: ["X", "=", "*", "-"],
    answer: "=",
  },
];

var highScore = localStorage.getItem("scores")
  ? JSON.parse(localStorage.getItem("scores"))
  : [];

function endQuiz() {
  questionsEl.setAttribute("class", "hide");
  finalEl.removeAttribute("class");
  timeEl.setAttribute("class", "hide");
  finalScoreEl.textContent = "You Final Score: " + timer;
  finalEl.appendChild(response);
  response.style.margin = "auto";
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
    if (currentQuestionIndex === questions.length) {
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
  if (event.currentTarget.value === questions[currentQuestionIndex].answer) {
    choicesEl.appendChild(response);
    response.innerHTML = "Right!";
    response.style.fontSize = "24px";
    response.style.color = "darkgray";
    response.style.borderTopColor = "darkgray";
    response.style.borderTop = "solid";
    response.style.width = "800px";
    response.style.textAlign = "center";
  } else {
    choicesEl.appendChild(response);
    response.innerHTML = "Wrong!";
    response.style.fontSize = "24px";
    response.style.color = "darkgray";
    response.style.borderTopColor = "darkgray";
    response.style.borderTop = "solid";
    response.style.width = "800px";
    response.style.textAlign = "center";
    timer = timer - 10;
  }
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    getQuestion();
  } else {
    currentQuestionIndex++;
    endQuiz();
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
    choicesEl.appendChild(response);
  });
}

btnStart.addEventListener("click", startQuizButton);

var submitHighBtn = document.querySelector("#submit");
var initials = document.querySelector("#initials");

function highScoreClick() {
  if (initials.value === "") {
    alert("Please enter initials");
    return;
  } else if (localStorage.getItem("scores") === null) {
    localStorage.setItem("scores", JSON.stringify(highScore));
  } else {
    highScore.push({
      initials: initials.value,
      score: timer + 1,
    });
    localStorage.setItem("scores", JSON.stringify(highScore));
  }

  for (var i = 0; i < highScore.length; i++) {
    console.log(highScore[i]);
  }
  return false;
}

submitHighBtn.addEventListener("click", highScoreClick);
