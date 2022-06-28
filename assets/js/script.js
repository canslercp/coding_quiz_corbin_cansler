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

  //global variables for each question function:
  var correctCounter = 0;
  var incorrectCounter = 0;
  var ques1 = document.querySelector(".ques1");
  var ques2 = document.querySelector('.ques2');
  var ques3 = document.querySelector('.ques3');
  var ques4 = document.querySelector('.ques4');
  var ques5 = document.querySelector('.ques5');

  //question one function
  function ques1Func() {
    var changeIntro = document.querySelector(".intro");

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

        ques2Func();

      //if incorrect answer is chosen
      }else{
        var incorrect = document.querySelector(".incorrect");

        incorrect.setAttribute('style', 'display:flex');
        incorrectCounter++

        setTimeout(() => {
          incorrect.style.display = 'none';
        }, 2000); 

        ques2Func();
      }

    }
    )
  }
  ques1Func();

  //question two function
  function ques2Func() {

    ques2.setAttribute('style', 'display:flex');
    ques1.setAttribute('style', 'display:none');

    // Listen for any clicks within the ques2 div
    ques2.addEventListener("click", function (event) {
      var answer = event.target;
      //if correct answer is chosen
      if (answer.matches('#ansC')){
        var correct = document.querySelector(".correct");

        correct.setAttribute('style', 'display:flex');
        correctCounter++

        setTimeout(() => {
          correct.style.display = 'none';
        }, 2000); 

        ques3Func();

      //if incorrect answer is chosen
      }else{
        var incorrect = document.querySelector(".incorrect");

        incorrect.setAttribute('style', 'display:flex');
        incorrectCounter++

        setTimeout(() => {
          incorrect.style.display = 'none';
        }, 2000); 

        ques3Func();
      }

    }
    )
  }
  
  //question three function
  function ques3Func() {

    ques3.setAttribute('style', 'display:flex');
    ques2.setAttribute('style', 'display:none');

    // Listen for any clicks within the ques2 div
    ques3.addEventListener("click", function (event) {
      var answer = event.target;
      //if correct answer is chosen
      if (answer.matches('#ansD')){
        var correct = document.querySelector(".correct");

        correct.setAttribute('style', 'display:flex');
        correctCounter++

        setTimeout(() => {
          correct.style.display = 'none';
        }, 2000); 

        ques4Func();

      //if incorrect answer is chosen
      }else{
        var incorrect = document.querySelector(".incorrect");

        incorrect.setAttribute('style', 'display:flex');
        incorrectCounter++

        setTimeout(() => {
          incorrect.style.display = 'none';
        }, 2000); 

        ques4Func();
      }

    }
    )
  }
   //question four function
   function ques4Func() {

    ques4.setAttribute('style', 'display:flex');
    ques3.setAttribute('style', 'display:none');

    // Listen for any clicks within the ques2 div
    ques4.addEventListener("click", function (event) {
      var answer = event.target;
      //if correct answer is chosen
      if (answer.matches('#ansD')){
        var correct = document.querySelector(".correct");

        correct.setAttribute('style', 'display:flex');
        correctCounter++

        setTimeout(() => {
          correct.style.display = 'none';
        }, 2000); 

        ques5Func();

      //if incorrect answer is chosen
      }else{
        var incorrect = document.querySelector(".incorrect");

        incorrect.setAttribute('style', 'display:flex');
        incorrectCounter++

        setTimeout(() => {
          incorrect.style.display = 'none';
        }, 2000); 

        ques5Func();
      }

    }
    )
  }
  //question five function
  function ques5Func() {

    ques5.setAttribute('style', 'display:flex');
    ques4.setAttribute('style', 'display:none');

    // Listen for any clicks within the ques2 div
    ques5.addEventListener("click", function (event) {
      var answer = event.target;
      //if correct answer is chosen
      if (answer.matches('#ansA')){
        var correct = document.querySelector(".correct");

        correct.setAttribute('style', 'display:flex');
        correctCounter++

        setTimeout(() => {
          correct.style.display = 'none';
        }, 2000); 

        endGameFunc();

      //if incorrect answer is chosen
      }else{
        var incorrect = document.querySelector(".incorrect");

        incorrect.setAttribute('style', 'display:flex');
        incorrectCounter++

        setTimeout(() => {
          incorrect.style.display = 'none';
        }, 2000); 

        endGameFunc();
      }

    }
    )
  }
});

//This is the function for when the time runs out or all questions have been answered
function endGameFunc () {

}

