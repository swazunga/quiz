var highScorePageEl = document.querySelector("#high-score-page");
var clearScoresBtn = document.querySelector("#clear-scores");
var highScoreEl = document.createElement("div");
var ul = document.getElementById("list");

function displayHighScores() {
  var scores = localStorage.getItem("scores");
  if (scores.length > 0) {
    highScoreEl.setAttribute("class", "highScoreList");
    scores = JSON.parse(scores);
    for (var i = 0; i < scores.length; i++) {
      if (i === 10) {
        break;
      }

      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          i + 1 + ". " + scores[i].initials + "  " + scores[i].score
        )
      );
      ul.appendChild(li);
      scores.sort(function (a, b) {
        return b.score - a.score;
      });
    }
  }
}

function clearScores() {
  localStorage.setItem("scores", "");
  ul.textContent = "";
}

displayHighScores();
clearScoresBtn.addEventListener("click", clearScores);
