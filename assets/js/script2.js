var highScorePageEl = document.querySelector("#high-score-page");
var clearScoresBtn = document.querySelector("#clear-scores");
var highScoreEl = document.createElement("div");

function displayHighScores() {
  var scores = localStorage.getItem("scores");
  if (scores.length > 0) {
    highScoreEl.setAttribute("class", "highScoreList");
    console.log(scores);

    scores = JSON.parse(scores);
    console.log(scores);
    for (var i = 0; i < scores.length; i++) {
      highScoreEl(scores[i]);
    }
    highScoreEl.textContent =
      i + 1 + ". " + scores.initials + " " + scores.score;
    highScorePageEl.appendChild(highScoreEl);
  }
}

function clearScores() {
  localStorage.setItem("scores", "");
  highScoreEl.textContent = "";
}

displayHighScores();
clearScoresBtn.addEventListener("click", clearScores);
