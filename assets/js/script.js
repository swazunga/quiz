// var wordsMain = "#p1";
var startQuizButton = function () {
  document.querySelector("#p1").innerHTML = "This is the fist question!";
  document.querySelector("#p1").style.fontSize = "24px";
  document.querySelector("#start-button").style.display = "none";
  document.querySelector("#btn-1").style.display = "block";
  document.querySelector("#btn-1").innerHTML = "this is the first answer!";
  document.querySelector("#btn-1").style.fontSize = "18px";
  document.querySelector("#btn-2").style.display = "block";
  document.querySelector("#btn-2").innerHTML = "this is the second answer!";
  document.querySelector("#btn-2").style.fontSize = "18px";
  document.querySelector("#btn-3").style.display = "block";
  document.querySelector("#btn-3").innerHTML = "this is the third answer!";
  document.querySelector("#btn-3").style.fontSize = "18px";
  document.querySelector("#btn-4").style.display = "block";
  document.querySelector("#btn-4").innerHTML = "this is the fourth answer!";
  document.querySelector("#btn-4").style.fontSize = "18px";
};

document
  .querySelector("#start-button")
  .addEventListener("click", startQuizButton);

var answerSelect = function () {
  console.log("click again");
};

document.querySelector("#btn-1").addEventListener("click", answerSelect);
