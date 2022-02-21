var timer = 75;
var time = document.querySelector("#time");
var wordsMain = document.querySelector("#p1");
var btnStart = document.querySelector("#start-button");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var showMe1 = function () {
  btn1.style.backgroundColor = "purple";
};
var showMe2 = function () {
  btn2.style.backgroundColor = "purple";
};
var endQuiz = function () {
  alert("Time ran out!");
};
var countDown = function () {};

var startQuizButton = function () {
  wordsMain.innerHTML = "This is the fist question!";
  wordsMain.style.fontSize = "24px";
  btnStart.style.display = "none";
  btn1.style.display = "block";
  btn1.innerHTML = "this is the first answer!";
  btn1.style.fontSize = "18px";
  btn2.style.display = "block";
  btn2.innerHTML = "this is the second answer!";
  btn2.style.fontSize = "18px";
  btn3.style.display = "block";
  btn3.innerHTML = "this is the third answer!";
  btn3.style.fontSize = "18px";
  btn4.style.display = "block";
  btn4.innerHTML = "this is the fourth answer!";
  btn4.style.fontSize = "18px";

  var tick_timer = function () {
    timer = timer - 1;
    time.querySelector.innerHTML = "Time: " + timer;
  };
  setInterval(tick_timer, 1000);
  console.log(timer);
};

btnStart.addEventListener("click", startQuizButton);

btn1.addEventListener("click", showMe1, false);
btn2.addEventListener("click", showMe2, false);
