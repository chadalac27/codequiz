//<----Variables Needed ---->
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startBtn");
var questionContainer = document.querySelector("#QuestionCont");
var currentQuestion;
var questionCounter = 0
//var currentAnswer = 0;
//var startTime = 100 ;
var time = "";
var questionsHTML = document.querySelector("#QuestionDisp")
var timeleft = 100;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
    }

var questions = [

    {
        question: "What does CDN stand for?",
        answers: ["Cached Data Now","Content Distribution Network","Content Delivery Network","Content Delivered Now"],
        correctIndex: "Content Delivery Network",

    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>","<scripting>","<js>","<javascript>"],
        correctIndex: "<script>",
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        answers: ["<script name=xxx.js>","<script href=xxx.js>","<script src=xxx.js>","test"],
        correctIndex: "<script src=xxx.js>",

    },
    {
        question: "The external JavaScript file must contain the script tag.",
        answers: ["True","False","maybe","none of the above"],
        correctIndex: "True",

    },
    {
        question: "How do you write Hello World in an alert box?",
        answers: ["alertbox(Hello World);","msg(Hello World);","alert(Hello World);","msgbox(Hello World);"],
        correctIndex:"alert(Hello World);",

    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction()","function = myFunction()","function:myFunction()","function myFunction"],
        correctIndex: "function myFunction()",

    },
    {
        question: "How do you call a function named myFunction?",
        answers: ["myFunction","call myFunction()","myFunction()","my.Function()"],
        correctIndex: "myFunction()",

    }
];
//<----- Function for on click start---->
startButton.addEventListener("click", function(){
    clearStart();
    nextQuestion();
});
    //renderAnswers();

function nextQuestion(){
  //get current question's answers
 currentQuestion = questions[questionCounter];
 console.log(currentQuestion)
  var answers = currentQuestion.answers

  const buttons = document.getElementsByClassName('answer-button')

  for(i=0; i< buttons.length;i++){
      currButton = buttons[i]
      currAnswer = answers[i]
      currButton.innerText = currAnswer
      currButton.addEventListener('click', checkAnswer)
  }

  questionsHTML.innerHTML = currentQuestion.question + "<hr>";

  };

function checkAnswer (event){
  const selectedAnswer = event.target.innerText
  console.log(`selected: ${selectedAnswer}, current: ${currentQuestion.correctIndex}`)
  correctwrongresponse = document.getElementById('correctWrongResponse')
  if(currentQuestion.correctIndex === selectedAnswer){

    console.log('right!')
    console.log(questionCounter)

          correctwrongresponse.textContent = "Correct";
          questionCounter ++  ;
          nextQuestion();
          //console.log(this)
      } else {
        console.log('wrong!')
        console.log(questionCounter)

          correctwrongresponse.textContent = "Wrong";
          questionCounter ++  ;
          nextQuestion();
      }


};

function endQuiz(){
    if (currentQuestion === 7){


}};

function clearStart(){
    var quiztitle = document.querySelector("#quizTitle");
    var quizdescription =  document.querySelector("#quizDescription");
    var startbuttoncont = document.querySelector("#startBtnCont");
    var buttondiv = document.querySelector("#buttondiv");
    quiztitle.classList.add("d-none");
    quizdescription.classList.add("d-none");
    startbuttoncont.classList.add("d-none");
    buttondiv.classList.remove("d-none");
  }
