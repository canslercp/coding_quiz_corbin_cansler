var highScoresData = JSON.parse(localStorage.getItem('score'));
console.log(highScoresData,'high scores data');

var placeholder = document.querySelector('#placeholder');
// placeholder.textContent = highScoresData.map

var map1 = highScoresData.map(x => placeholder.textContent = x);
  