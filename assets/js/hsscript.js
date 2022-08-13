var highScoresData = JSON.parse(localStorage.getItem('score'));
console.log(highScoresData,'high scores data');

var placeholder = document.querySelector('#placeholder');

var map1 = highScoresData.map(getHighScores).sort()
placeholder.textContent = map1

function getHighScores (item) {
    const scores = item.initials + " - " + item.score + "\n";

    return scores;
}