var timer = 555;
var time = document.querySelector("#time");
var wordsMain = document.querySelector("#p1");
var btnStart = document.querySelector("#start-button");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var response = document.createElement("div");
// var allBtns = document.querySelector("#btn-1", "#btn-2", "#btn-3", "#btn-4");
var showMe1 = function () {
  btn1.style.backgroundColor = "purple";
  document.getElementById("words-main").appendChild(response);
  response.innerHTML = "Right/Wrong";
  response.style.margin = "50px";
  response.style.borderTop = "solid";
  response.style.borderTopColor = "darkgray";
  response.style.width = "800px";
  response.style.color = "darkgray";
  response.style.fontSize = "24px";
};
var showMe2 = function () {
  btn2.style.backgroundColor = "purple";
};
var showMe3 = function () {
  btn3.style.backgroundColor = "purple";
};
var showMe4 = function () {
  btn4.style.backgroundColor = "purple";
};
var endQuiz = function () {};

var startQuizButton = function () {
  wordsMain.innerHTML = "This is the first question!";
  wordsMain.style.fontSize = "24px";
  btnStart.style.display = "none";
  btn1.style.display = "block";
  btn1.innerHTML = "this is the first answer!";
  btn2.style.display = "block";
  btn2.innerHTML = "this is the second answer!";
  btn3.style.display = "block";
  btn3.innerHTML = "this is the third answer!";
  btn4.style.display = "block";
  btn4.innerHTML = "this is the fourth answer!";

  var endPrompt = function () {
    alert("Time ran out!");
    clearInterval(myInterval);
    wordsMain.innerHTML = "Quiz Over!";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
    response.style.display = "none";

    return;
  };
  var tick_timer = function () {
    timer = timer - 1;
    time.innerHTML = "Time: " + timer;
    if (timer < 0) {
      endPrompt();
      time.innerHTML = "Time: 0";
    }
  };
  var myInterval = setInterval(tick_timer, 1000);
};

btnStart.addEventListener("click", startQuizButton);

btn1.addEventListener("click", showMe1, false);
btn2.addEventListener("click", showMe2, false);
btn3.addEventListener("click", showMe3, false);
btn4.addEventListener("click", showMe4, false);
