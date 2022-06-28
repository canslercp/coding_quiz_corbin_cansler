//Click "start quiz" button to open quiz
var startQuiz = document.querySelector(".purpButton");

startQuiz.addEventListener("click", function () {

  // timer starts when the start quiz button is clicked------------------>
  var timeEl = document.querySelector(".time");

  var secondsLeft = 60;

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        //-->sendMessage();
      }

    }, 1000);
  }

  setTime();

  //global variables for each question:
  var correctCounter = 0;
  var incorrectCounter = 0;
  var ques2 = document.querySelector('.ques2');

  //question one function
  function ques1Func() {
    var changeIntro = document.querySelector(".intro");
    var ques1 = document.querySelector(".ques1");

    changeIntro.setAttribute('style', 'display: none');
    ques1.setAttribute('style', 'display: flex');

    // Listen for any clicks within the ques1 div
    ques1.addEventListener("click", function (event) {
      var answer = event.target;
      //if correct answer is chosen
      if (answer.matches('#ansC')){
        var correct = document.querySelector(".correct");

        correct.setAttribute('style', 'display:flex');
        correctCounter++

        setTimeout(() => {
          correct.style.display = 'none';
        }, 2000); 

        ques2.setAttribute('style', 'display:flex');
        ques1.setAttribute('style', 'display:none');

      //if incorrect answer is chosen
      }else{
        var incorrect = document.querySelector(".incorrect");

        incorrect.setAttribute('style', 'display:flex');
        incorrectCounter++

        setTimeout(() => {
          incorrect.style.display = 'none';
        }, 2000); 

        ques2.setAttribute('style', 'display:flex');
        ques1.setAttribute('style', 'display:none');
      }

    }
    )
  }
  ques1Func();

  
});


