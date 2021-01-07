var timerEl = document.getElementById("timer")
var timeRemaining = 6
var startButton = document.getElementById("start-button")
var questions = [
    {
        q: "What fish is this?",
        choices: [1, 2, 3],
        answer: "maguro"
    }
];

function countDownToQuiz() {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerEl.textContent = "Quiz will begin in " + timeRemaining + " seconds!";

        if(timeRemaining === 1) {
            timerEl.textContent = "Quiz will begin in " + timeRemaining + " second!";
        } else if (timeRemaining === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "Go!!!"
            beginQuiz();
        }
    }, 1000)
}

function beginQuiz() {
    var question = document.createElement("main");

    question.textContent = "What fish is this?"
    document.querySelector(".box").appendChild(question);
};

startButton.addEventListener("click", function(){
    countDownToQuiz();

    });

