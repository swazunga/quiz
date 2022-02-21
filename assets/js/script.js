var wordsMain = document.querySelector("#p1");
var btnStart = document.querySelector("#start-button");
var btn1 = document.querySelector("#btn-1");
var btn2 = document.querySelector("#btn-2");
var btn3 = document.querySelector("#btn-3");
var btn4 = document.querySelector("#btn-4");
var showMe = function () {
  btn1.style.backgroundColor = "purple";
};

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
};

btnStart.addEventListener("click", startQuizButton);

// document.querySelector(".words-main").addEventListener("click", answerSelect);
btn1.addEventListener("click", showMe, false);
btn2.addEventListener("click", showMe, false);
