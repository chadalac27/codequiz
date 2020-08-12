//<----Variables Needed ---->
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startBtn");
var questionContainer = document.querySelector("#QuestionCont");
var ActiveQuestion = 0;
//var currentAnswer = 0;
var startTime = 100 ;
var time = "";
var QuestionDisp = document.querySelector("#QuestionDisp")

var Questions = [

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
        answers: ["<script name=xxx.js>","<script href=xxx.js>","<script src=xxx.js>"],
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
console.log(Questions[ActiveQuestion]);
//<----- Function for on click start---->
startButton.addEventListener("click", function(){
    clearStart();
    renderQuestionandAnswer();
});
    //renderAnswers();
       
function renderQuestionandAnswer(){
    var currentAnswer = Questions[ActiveQuestion].answers;
    QuestionDisp.innerHTML = Questions[ActiveQuestion].question + "<hr>";
    for (let i = 0; i < currentAnswer.length; i++) {
        //document.getElementById("answer-0").innerHTML = currentAnswer[0];
        //document.getElementById("answer-1").innerHTML = currentAnswer[1];
        //document.getElementById("answer-2").innerHTML = currentAnswer[2];
        //document.getElementById("answer-3").innerHTML = currentAnswer[3];
        var buttongrab = document.getElementById("answer-" + i)
        buttongrab.textContent = currentAnswer[i];
        console.log(buttongrab)
        buttongrab.addEventListener("click", function(){
            console.log("button clicked");
            var correctwrongresponse = document.getElementById("correctWrongResponse")
        if(Questions[ActiveQuestion].correctIndex === buttongrab.textContent){
            console.log(this)
                correctwrongresponse.textContent = "Correct";
                ActiveQuestion ++  ;
                renderQuestionandAnswer();
                //console.log(this)
            } else {
                correctwrongresponse.textContent = "Wrong";
                ActiveQuestion ++  ;
                renderQuestionandAnswer();
            }
            
            
        });
    };        
        };

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






    //<--- Function to render Questions ---->

//<---- Render answers--->
//function renderAnswers(){
    //    var answerList = document.querySelector("questions")
    //    for (let i = 0; i < Questions[ActiveQuestion].answers.length; i++) {
        //        answerList.classList.add("btn btn-info");
        //        
        //    }
        //
        //}
        
        //function renderAnswers(answerList){
            //var answerList = document.querySelector("#questions")
            //var answerDisp = document.createElement("button");
            //        Questions.answers.forEach( function DisplayAnswer() {
                //            answerList.innerHTML = answerDisp;
                //            console.log(answerDisp)
                //        return;
                //    });
                //}
                //function renderAnswer(){
                //    var answerList = document.querySelector("#questions")
                //    var QuestAnswers = Questions.answers[0];
                //    QuestAnswers.forEach(function DisplayAnswer() {
                //        var answerbuttons = document.createElement("button")
                //        answerbuttons.innerHTML = QuestAnswers;
                //        answerList.innerHTML = QuestAnswers;
                //        return;  
                //    });
                //}
                


