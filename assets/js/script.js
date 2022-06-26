//Click "start quiz" button to open quiz
var startQuiz = document.querySelector(".purpButton");

startQuiz.addEventListener("click", function(){

// timer----doesnt work yet----------------------------------->
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      //-->sendMessage();
    }

  }, 1000);
}

setTime();

});


