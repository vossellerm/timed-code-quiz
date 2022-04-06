// select elements by class
var timeEl = document.querySelector(".time");

// select elements by id
var startBtn = document.querySelector("#startBtn");

var secondsLeft = 60;

// set timer function

// click start button to prompt first question and start timer
startBtn.addEventListener("click", function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // stops questions if time runs out
      clearInterval(timerInterval);
      // calls function to show final score and enter initials
    }
  }, 1000);
});

// save initials and score

// question functions
// prompt next question when answer is selected
// displays correct or wrong based on previous answer selection
