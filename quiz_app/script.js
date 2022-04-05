const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

//Here we are selecting the btn element of the html document
const btn = document.querySelector(".btn-start");
const quizzing = document.querySelector(".quizzing");
const quizText = document.querySelector(".question-text-of-index");
const questionindex = document.querySelector(".question-index");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

//This is another element which shows time
const starting = document.querySelector(".starting");
const time = document.querySelector(".time-text");

//This is the function which is called whenever the button is clicked
//The function has a setInterval which contains two parameters:1)a callback function and 2)the time after which another function is called. setInterval is continuous and keeps on doing its tasks until a termination condition is written

let index = questionindex.textContent;
var timestart = 50;

function btnclicked1(index, wrong) {
  starting.style.display = "none";
  quizText.textContent = questions[index].questionText;

  //Here we are changing the options respectively
  option1.textContent = questions[index].options[0];
  option2.textContent = questions[index].options[1];
  option3.textContent = questions[index].options[2];
  option4.textContent = questions[index].options[3];

  //Intially the question section was hidden from the page but now as the start button is clicked therefore the question along with its options should now be displayed
  quizzing.style.display = "block";

  //This is the setInterval function which acts as a timer here
  //Thid function should not be called if the answer is correct
  //However if the answer is wrong then the fucnction should be called with the current value - 10
  if (index == 0) {
    timer(1500);
  } else if (wrong) {
    timer(1000);
  }
}

function finished(time) {
  console.log("The time is finished the quiz is over");
  if (index == 5) {
    console.log("Congrats your quiz is completed");
    console.log(`You finished the quiz in${time} seconds`);
  } else {
    console.log("Sorry you were not able to complete the quiz");
  }
}

function timer(interval) {
  let func = setInterval(() => {
    btnclicked(timestart, func);
    timestart--;
  }, interval);
}

function optionclicked1(e) {
  let argument = questions[index].options[0];
  optionclicked(argument);
}

function optionclicked2(e) {
  let argument = questions[index].options[1];
  optionclicked(argument);
}

function optionclicked3(e) {
  let argument = questions[index].options[2];
  optionclicked(argument);
}

function optionclicked4(e) {
  let argument = questions[index].options[3];
  optionclicked(argument);
}

function optionclicked(ans) {
  if (ans === questions[index].answer) {
    console.log("The correct option has been clicked");
    index++;
    btnclicked1(index, false);
  } else {
    console.log("The wrong option has been clicked");
    if (timestart < 10) {
      timestart = 0;
    } else {
      timestart -= 9;
    }

    // btnclicked1(index,true);
  }
}
//This is the callback function which will be called sometime later when every time the button is clicked
function btnclicked(timestart, func) {
  if (timestart <= 0) {
    clearInterval(func);
    finished(timestart);
  } else if (index == 5) {
    clearInterval(func);
    finished(timestart);
  }
  time.textContent = timestart;
  // time.textContent=timestart;
}

//Here we are adding an eventListner to our btn object
//The eventListner has two parameters in it which are first what event we need to perform and 2nd is when the event is performed what should be executed
btn.addEventListener("click", () => {
  btnclicked1(index, false);
});
option1.addEventListener("click", optionclicked1);
option2.addEventListener("click", optionclicked2);
option3.addEventListener("click", optionclicked3);
option4.addEventListener("click", optionclicked4);
