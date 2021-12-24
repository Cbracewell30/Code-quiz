var showResponse = document.getElementById('startbtn');
var timerHTML = document.getElementById('timer');
var scoreHTML = document.getElementById('score');
var questionHTML = document.getElementById('quiz-questions');
var button1HTML = document.getElementById('btn-1');
var button2HTML = document.getElementById('btn-2');
var button3HTML = document.getElementById('btn-3');
var button4HTML = document.getElementById('btn-4');
var thiscontainerHTML = document.getElementById("quiz-container")
thiscontainerHTML.style.display = "none";

var correctwrongHTML = document.getElementById('correct-wrong');

button1HTML.addEventListener("click", showresult);
button2HTML.addEventListener("click", showresult);
button3HTML.addEventListener("click", showresult);
button4HTML.addEventListener("click", showresult);

var score = 0

function showresult() {
    var useranswer = this.getAttribute('data-value');
    console.log(useranswer);

    if (useranswer == questionBank[questionList].answer) {
        correctwrongHTML.textContent = "Correct"
        score += 5
    }
    else {
        correctwrongHTML.textContent = "Wrong"
        counter -= 5
    }

    if (questionList < questionBank.length - 1) {
        questionList++
        quizstart()
    }
    else {
        alert('End of Quiz!')
        
    }


};






var questionBank = [
    {
        question: "Question1",
        choices: ["ri", "option2", "option3", "option4"],
        answer: 0
    }, {
        question: "Question2",
        choices: ["option1", "option2", "option3", "option4"],
        answer: 1
    }, {
        question: "Question3",
        choices: ["option1", "option2", "option3", "option4"],
        answer: 2
    }, {
        question: "Question4",
        choices: ["option1", "option2", "option3", "option4"],
        answer: 3
    }, {
        question: "Question5",
        choices: ["option1", "option2", "option3", "option4"],
        answer: 2
    },
]

var questionList = 0
var timeObj;
var counter = 25

showResponse.addEventListener("click", function () {
    thiscontainerHTML.style.display = "block";
    timeObj = setInterval(() => {
        timerHTML.textContent = counter;
        if (counter > 1) {
            counter--
        }
        else {
            alert('Times up!');
        }

    }, 1000);

    quizstart();
});

function quizstart() {
    questionHTML.textContent = questionBank[questionList].question
    button1HTML.textContent = questionBank[questionList].choices[0]
    button2HTML.textContent = questionBank[questionList].choices[1]
    button3HTML.textContent = questionBank[questionList].choices[2]
    button4HTML.textContent = questionBank[questionList].choices[3]
}
