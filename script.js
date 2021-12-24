var showResponse = document.getElementById('startbtn');
var timerHTML = document.getElementById('timer');
var scoreHTML = document.getElementById('score');
var questionHTML = document.getElementById('quiz-container');
var button1HTML = document.getElementById('btn-1');
var button2HTML = document.getElementById('btn-2');
var button3HTML = document.getElementById('btn-3');
var button4HTML = document.getElementById('btn-4');

var questionBank = [
    {
        question: "Question1",
        choices:["option1","option2","option3","option4"],
        answer:0
    },{
    question: "Question2",
    choices:["option1","option2","option3","option4"],
    answer:1
    }, {
    question: "Question3",
    choices:["option1","option2","option3","option4"],
    answer:2
    },{
    question: "Question4",
    choices:["option1","option2","option3","option4"],
    answer:3
    },{
    question: "Question5",
    choices:["option1","option2","option3","option4"],
    answer:4
    },
]
var 

showResponse.addEventListener("click",  function() {
    document.getElementById("quiz-container").style.display = "block";
  
});
