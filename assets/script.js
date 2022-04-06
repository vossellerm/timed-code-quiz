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
// start Quiz, prompt question 1
startBtn.addEventListener("click", function firstQuestion() {
  question.textContent = "Commonly used data types DO NOT include:";

  instructions.remove();

  var listElq1 = document.createElement("ul");
  var strings = document.createElement("li");
  var booleans = document.createElement("li");
  var alerts = document.createElement("li");
  var numbers = document.createElement("li");

  listElq1.classList.add("choices");

  strings.textContent = "1. Strings";
  booleans.textContent = "2. Booleans";
  alerts.textContent = "3. Alerts";
  numbers.textContent = "4. Numbers";

  answers.appendChild(listElq1);
  listElq1.appendChild(strings);
  listElq1.appendChild(booleans);
  listElq1.appendChild(alerts);
  listElq1.appendChild(numbers);

  startBtn.remove();
  // select Strings as Q1 answer, prompt Q2
  strings.addEventListener("click", function (strings) {
    if (strings.target && strings.target.nodeName == "LI") {
      question.textContent =
        "The condition in an if/else statement is enclosed within ____.";

      var listElq2 = document.createElement("ul");
      var quotes = document.createElement("li");
      var curlyBrackets = document.createElement("li");
      var parentheses = document.createElement("li");
      var squareBrackets = document.createElement("li");
      var correct1 = document.createElement("p");

      listElq2.classList.add("choices");
      correct1.classList.add("correct");

      quotes.textContent = "1. Quotes";
      curlyBrackets.textContent = "2. Curly Brackets";
      parentheses.textContent = "3. Parentheses";
      squareBrackets.textContent = "4. Square Brackets";

      correct1.textContent = "Correct!";

      listElq1.remove();

      answers.appendChild(listElq2);
      listElq2.appendChild(quotes);
      listElq2.appendChild(curlyBrackets);
      listElq2.appendChild(parentheses);
      listElq2.appendChild(squareBrackets);
      answers.appendChild(correct1);

      // select quotes as Q2 answer, prompt Q3
      quotes.addEventListener("click", function (quotes) {
        if (quotes.target && quotes.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(parentheses);
          listElq3.appendChild(squareBrackets);
          answers.appendChild(correct2);
        }
      });

      // select curly brackets as Q2 answer, prompt Q3
      curlyBrackets.addEventListener("click", function (curlyBrackets) {
        if (curlyBrackets.target && curlyBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select parentheses as Q2 answer, prompt Q3
      parentheses.addEventListener("click", function (parentheses) {
        if (parentheses.target && parentheses.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Correct!";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select square brackets as Q2 answer, prompt Q3
      squareBrackets.addEventListener("click", function (squareBrackets) {
        if (squareBrackets.target && squareBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });
    }
  });
  // select Booleans as Q1 answer, prompt Q2
  booleans.addEventListener("click", function (booleans) {
    if (booleans.target && booleans.target.nodeName == "LI") {
      question.textContent =
        "The condition in an if/else statement is enclosed within ____.";

      var listElq2 = document.createElement("ul");
      var quotes = document.createElement("li");
      var curlyBrackets = document.createElement("li");
      var parentheses = document.createElement("li");
      var squareBrackets = document.createElement("li");
      var correct1 = document.createElement("p");

      listElq2.classList.add("choices");
      correct1.classList.add("correct");

      quotes.textContent = "1. Quotes";
      curlyBrackets.textContent = "2. Curly Brackets";
      parentheses.textContent = "3. Parentheses";
      squareBrackets.textContent = "4. Square Brackets";

      correct1.textContent = "Correct!";

      listElq1.remove();

      answers.appendChild(listElq2);
      listElq2.appendChild(quotes);
      listElq2.appendChild(curlyBrackets);
      listElq2.appendChild(parentheses);
      listElq2.appendChild(squareBrackets);
      answers.appendChild(correct1);

      // select quotes as Q2 answer, prompt Q3
      quotes.addEventListener("click", function (quotes) {
        if (quotes.target && quotes.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(parentheses);
          listElq3.appendChild(squareBrackets);
          answers.appendChild(correct2);
        }
      });

      // select curly brackets as Q2 answer, prompt Q3
      curlyBrackets.addEventListener("click", function (curlyBrackets) {
        if (curlyBrackets.target && curlyBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select parentheses as Q2 answer, prompt Q3
      parentheses.addEventListener("click", function (parentheses) {
        if (parentheses.target && parentheses.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Correct!";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select square brackets as Q2 answer, prompt Q3
      squareBrackets.addEventListener("click", function (squareBrackets) {
        if (squareBrackets.target && squareBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });
    }
  });

  // select alerts as Q1 answer, prompt Q2
  alerts.addEventListener("click", function (alerts) {
    if (alerts.target && alerts.target.nodeName == "LI") {
      question.textContent =
        "The condition in an if/else statement is enclosed within ____.";

      var listElq2 = document.createElement("ul");
      var quotes = document.createElement("li");
      var curlyBrackets = document.createElement("li");
      var parentheses = document.createElement("li");
      var squareBrackets = document.createElement("li");
      var correct1 = document.createElement("p");

      listElq2.classList.add("choices");
      correct1.classList.add("correct");

      quotes.textContent = "1. Quotes";
      curlyBrackets.textContent = "2. Curly Brackets";
      parentheses.textContent = "3. Parentheses";
      squareBrackets.textContent = "4. Square Brackets";

      correct1.textContent = "Correct!";

      listElq1.remove();

      answers.appendChild(listElq2);
      listElq2.appendChild(quotes);
      listElq2.appendChild(curlyBrackets);
      listElq2.appendChild(parentheses);
      listElq2.appendChild(squareBrackets);
      answers.appendChild(correct1);

      // select quotes as Q2 answer, prompt Q3
      quotes.addEventListener("click", function (quotes) {
        if (quotes.target && quotes.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(parentheses);
          listElq3.appendChild(squareBrackets);
          answers.appendChild(correct2);
        }
      });

      // select curly brackets as Q2 answer, prompt Q3
      curlyBrackets.addEventListener("click", function (curlyBrackets) {
        if (curlyBrackets.target && curlyBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select parentheses as Q2 answer, prompt Q3
      parentheses.addEventListener("click", function (parentheses) {
        if (parentheses.target && parentheses.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Correct!";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select square brackets as Q2 answer, prompt Q3
      squareBrackets.addEventListener("click", function (squareBrackets) {
        if (squareBrackets.target && squareBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });
    }
  });

  // select numbers as Q1 answer, prompt Q2
  numbers.addEventListener("click", function (numbers) {
    if (numbers.target && numbers.target.nodeName == "LI") {
      question.textContent =
        "The condition in an if/else statement is enclosed within ____.";

      var listElq2 = document.createElement("ul");
      var quotes = document.createElement("li");
      var curlyBrackets = document.createElement("li");
      var parentheses = document.createElement("li");
      var squareBrackets = document.createElement("li");
      var correct1 = document.createElement("p");

      listElq2.classList.add("choices");
      correct1.classList.add("correct");

      quotes.textContent = "1. Quotes";
      curlyBrackets.textContent = "2. Curly Brackets";
      parentheses.textContent = "3. Parentheses";
      squareBrackets.textContent = "4. Square Brackets";

      correct1.textContent = "Correct!";

      listElq1.remove();

      answers.appendChild(listElq2);
      listElq2.appendChild(quotes);
      listElq2.appendChild(curlyBrackets);
      listElq2.appendChild(parentheses);
      listElq2.appendChild(squareBrackets);
      answers.appendChild(correct1);

      // select quotes as Q2 answer, prompt Q3
      quotes.addEventListener("click", function (quotes) {
        if (quotes.target && quotes.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(parentheses);
          listElq3.appendChild(squareBrackets);
          answers.appendChild(correct2);
        }
      });

      // select curly brackets as Q2 answer, prompt Q3
      curlyBrackets.addEventListener("click", function (curlyBrackets) {
        if (curlyBrackets.target && curlyBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select parentheses as Q2 answer, prompt Q3
      parentheses.addEventListener("click", function (parentheses) {
        if (parentheses.target && parentheses.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Correct!";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });

      // select square brackets as Q2 answer, prompt Q3
      squareBrackets.addEventListener("click", function (squareBrackets) {
        if (squareBrackets.target && squareBrackets.target.nodeName == "LI") {
          question.textContent =
            "Arrays in JavaScript can be used to store _____.";

          var listElq3 = document.createElement("ul");
          var numString = document.createElement("li");
          var otherArray = document.createElement("li");
          var booleans = document.createElement("li");
          var allAbove = document.createElement("li");
          var correct2 = document.createElement("p");

          listElq3.classList.add("choices");
          correct2.classList.add("correct");

          numString.textContent = "1. Numbers and Strings";
          otherArray.textContent = "2. Other Arrays";
          booleans.textContent = "3. Booleans";
          allAbove.textContent = "4. All of the above";

          correct2.textContent = "Wrong";

          listElq2.remove();
          correct1.remove();

          answers.appendChild(listElq3);
          listElq3.appendChild(numString);
          listElq3.appendChild(otherArray);
          listElq3.appendChild(booleans);
          listElq3.appendChild(allAbove);
          answers.appendChild(correct2);
        }
      });
    }
  });
});

// save initials and score

// question functions
// prompt next question when answer is selected
// displays correct or wrong based on previous answer selection
