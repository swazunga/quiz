var highScorePageEl = document.querySelector("#high-score-page");
var clearScoresBtn = document.querySelector("#clear-scores");
var highScoreEl = document.createElement("div");

function displayHighScores() {
  var scores = localStorage.getItem("scores");
  if (scores.length > 0) {
    highScoreEl.setAttribute("class", "highScoreList");
    scores = JSON.parse(scores);
    for (var i = 0; i < scores.length; i++) {
      if (i === 10) {
        break;
      }
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          i + 1 + ". " + scores[i].initials + "  " + scores[i].score
        )
      );
      ul.appendChild(li);
    }
  }
}

function clearScores() {
  localStorage.setItem("scores", "");
  highScoreEl.textContent = "";
}

displayHighScores();
clearScoresBtn.addEventListener("click", clearScores);
