//<----Variables Needed ---->
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startBtn");
var questionContainer = document.querySelector("#QuestionCont");
var ActiveQuestion = 0;
var startTime = 100 ;
var time = "";
var QuestionDisp = document.querySelector("#QuestionDisp")

var Quest1 = 
{
    question: "What does CDN stand for?",
    answers: ["Cached Data Now","Content Distribution Network","Content Delivery Network","Content Delivered Now"],
    correctIndex: 2,
    penaltyValue: 10
}
var Quest2 = 
{
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>","<scripting>","<js>","<javascript>"],
    correctIndex: 0,
    penaltyValue: 15
}
var Quest3 = 
{
    question: "What is the correct syntax for referring to an external script called xxx.js?",
    answers: ["<script name=xxx.js>","<script href=xxx.js>","<script src=xxx.js>"],
    correctIndex: 2,
    penaltyValue: 7
}
var Quest4 = 
{
    question: "The external JavaScript file must contain the script tag.",
    answers: ["True","False"],
    correctIndex: 0,
    penaltyValue: 5
}
var Quest5 = 
{
    question: "How do you write Hello World in an alert box?",
    answers: ["alertbox(Hello World);","msg(Hello World);","alert(Hello World);","msgbox(Hello World);"],
    correctIndex:2,
    penaltyValue: 20
}
var Quest6 = 
{
    question: "How do you create a function in JavaScript?",
    answers: ["function myFunction()","function = myFunction()","function:myFunction()","function myFunction"],
    correctIndex: 0,
    penaltyValue: 10
}
var Quest7 = 
{
    question: "How do you call a function named myFunction?",
    answers: ["myFunction","call myFunction()","myFunction()","my.Function()"],
    correctIndex: 2,
    penaltyValue: 10
}
var Questions = [Quest1, Quest2, Quest3, Quest4, Quest5, Quest6, Quest7];
//<----- Function for on click start---->
startButton.addEventListener("click", function(){
    renderQuestion(); clearStart()
time = setInterval(tick,1000)    
})
//<--- Function to render Questions ---->
function renderQuestion(){
    if (ActiveQuestion <= Questions.length){
QuestionDisp.innerHTML = Questions[ActiveQuestion].question + "<hr>";
    }
}
function clearStart(){
document.querySelector("#quizTitle").classList.add("d-none");
document.querySelector("quizDescription").classList.add("d-none");
document.querySelector("startBtnCont").classList.add("d-none")
}
