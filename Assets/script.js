var timerEl = document.getElementById("timer")
var timeTilTest = 4
var testDuration = 91
var startButton = document.getElementById("start-button")
var questionIndex = 0;
var question = ""
var score = 0;
var entireQuiz = [
    {
        q: "Assets/Images/salmon.jpg",
        choices: ["salmon", "octopus", "tuna", "crab"],
        answer: "salmon"
    },
    {
        q: "Assets/Images/tako.jfif",
        choices: ["beef", "octopus", "chicken", "Golden Eyed Snapper"],
        answer: "octopus"
    },
    {
        q: "Assets/Images/toro-nigiri.jpg",
        choices: ["squid", "catfish", "tuna", "tuna belly"],
        answer: "tuna belly"
    },
    {
        q: "Assets/Images/uni.jpg",
        choices: ["clam", "oyster", "sea urchin roe", "starfish"],
        answer: "sea urchin roe"
    }
];

console.log(localStorage);

startButton.addEventListener("click", function () {
    countDownToQuiz();

});

function countDownToQuiz() {
    var timerInterval = setInterval(function () {
        timeTilTest--;
        timerEl.textContent = "Quiz will begin in " + timeTilTest + " seconds!";

        if (timeTilTest === 1) {
            timerEl.textContent = "Quiz will begin in " + timeTilTest + " second!";
        } else if (timeTilTest === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "Go!!!"
            beginQuiz();
            testTimer();
            startButton.setAttribute("class", "hidden");
        }
    }, 1000)
}

function beginQuiz() {
    question = document.createElement("main");
    question.textContent = "What kind of sushi is this?";
    question.setAttribute("class", "question");
    document.querySelector(".box").appendChild(question);

    displayQuestion(question);
};

function testTimer() {
    var timerInterval = setInterval(function () {
        testDuration--;
        timerEl.textContent = testDuration + " seconds left";

        if (testDuration === 1) {
            timerEl.textContent = testDuration + " second left";
        } else if (testDuration === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "You have ran out of time!"
        } 
    }, 1000)

}

function displayQuestion() {
    if (questionIndex === entireQuiz.length) {
        score += testDuration;
        question.textContent = "Quiz Complete! Your score is " + score;
        console.log(score);
        return highScore();
    }


    document.querySelector("#quiz").innerHTML = "";
    var questionImage = document.createElement("img");
    questionImage.setAttribute("src", entireQuiz[questionIndex].q)
    questionImage.setAttribute("style", "width:300px;height:300px;")
    document.querySelector("#quiz").appendChild(questionImage)

    

    for (let i = 0; i < entireQuiz[questionIndex].choices.length; i++) {

        const choice = entireQuiz[questionIndex].choices[i]
        var button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function () {
            var userChoice = this.textContent
            // console.log(userChoice);
            checkAnswer(userChoice);
            // get text value from choice
            // check answer 
            //if answer = choice, right
            // if right score increase
            //if answer != choice, wrong
            //if wrong timer -5
            //
        })
        document.querySelector("#quiz").appendChild(button);

    

    }
}


function currentAnswer() {
    console.log(entireQuiz[questionIndex].answer);
    return entireQuiz[questionIndex].answer
}

function checkAnswer(userChoice) {
    if (userChoice === currentAnswer()) {
        score += 5;
    }
    else {
        testDuration -= 10;
    }



    questionIndex++;

    
    displayQuestion();

}

function highScore() {
    document.querySelector("#quiz").innerHTML = "";
    localStorage.setItem("score", score)
    // console.log(localStorage);
    var nameForm = document.createElement("form");
    nameForm.textContent= "Give us your name, you loser"
    nameForm.setAttribute("class", "bg-dark text-white text-center")
    document.querySelector("#quiz").appendChild(nameForm);
    clearInterval(timerInterval)
    timerEl.textContent = ''
    

}
console.log(localStorage);