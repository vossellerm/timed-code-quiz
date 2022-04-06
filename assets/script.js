// select elements by class
var timeEl = document.querySelector(".time");

// select elements by id
var startBtn = document.querySelector("#startBtn");
var question = document.querySelector("#title");
var answers = document.querySelector("#answers");
var instructions = document.querySelector("#instructions");

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

startBtn.addEventListener("click", function firstQuestion() {
  question.textContent = "Commonly used data types DO NOT include:";

  instructions.remove();

  var listEl = document.createElement("ul");
  var strings = document.createElement("li");
  var booleans = document.createElement("li");
  var alerts = document.createElement("li");
  var numbers = document.createElement("li");

  listEl.classList.add("choices");

  strings.textContent = "1. Strings";
  booleans.textContent = "2. Booleans";
  alerts.textContent = "3. Alerts";
  numbers.textContent = "4. Numbers";

  answers.appendChild(listEl);
  listEl.appendChild(strings);
  listEl.appendChild(booleans);
  listEl.appendChild(alerts);
  listEl.appendChild(numbers);

  startBtn.remove();
});

// save initials and score

// question functions
// prompt next question when answer is selected
// displays correct or wrong based on previous answer selection
