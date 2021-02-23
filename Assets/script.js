var timerEl = document.getElementById("timer")
var timeTilTest = 4
var testDuration = 91
var startButton = document.getElementById("start-button")
var questionIndex = 0;
var question = ""
var score = 0;
var nameForm = document.createElement("input");
var scoreName = {};
var entireQuiz = [
    {
        q: "Assets/Images/shake.jpg",
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

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    countDownToQuiz();
    startButton.setAttribute("class", "d-none");

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
    question = document.createElement("h1");
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


    document.querySelector(".quiz-img").innerHTML = "";
    document.querySelector(".quiz-button").innerHTML = "";
    var questionImage = document.createElement("img");
    questionImage.setAttribute("src", entireQuiz[questionIndex].q);
    questionImage.setAttribute("style", "width:300px;height:300px;");
    questionImage.setAttribute("class", "mr-5 ml-5 my-img");
    document.querySelector(".quiz-img").appendChild(questionImage);

    

    for (let i = 0; i < entireQuiz[questionIndex].choices.length; i++) {

        const choice = entireQuiz[questionIndex].choices[i]
        var button = document.createElement("button");
        var buttonDiv = document.createElement("div")
        button.textContent = choice;
        buttonDiv.setAttribute("class", "col-6 d-inline align-bottom buttons")
        button.setAttribute("class", "my-button")
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
        
        document.querySelector(".quiz-button").appendChild(buttonDiv);
        buttonDiv.appendChild(button);

    

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

var highScore = function() {
    document.querySelector("#quiz").innerHTML = "";
    timerEl.setAttribute("class", "d-none");
    displayHighScore();
    var endingMessage = document.createElement("h1");
    endingMessage.textContent= "🍣Great job!🍣"
    endingMessage.setAttribute("class", "bg-dark text-white text-center");
    document.querySelector("#quiz").appendChild(endingMessage);

    
    nameForm.setAttribute("type", "text");
    nameForm.setAttribute("placeholder", "Enter your name");
    document.querySelector("#quiz").appendChild(nameForm);

    var submitName = document.createElement("input");
    submitName.setAttribute("type", "submit");
    submitName.setAttribute("id", "nameForm")
    submitName.setAttribute("value", "Enter to Win!");
    submitName.setAttribute("class", "m-1")
    document.querySelector("#quiz").appendChild(submitName);
    submitName.addEventListener("click", function (event) {
        event.preventDefault();
        scoreName = {
            score: score,
            name: nameForm.value.trim()
        };
        localStorage.setItem("scoreName", JSON.stringify(scoreName));
            console.log(localStorage);
            
    })
}
console.log(scoreName);

function displayHighScore() {
    var highScoreList = document.querySelector("#highscore");
    highScoreList.setAttribute("class", "bg-dark text-light text-center")
    var lastScore = JSON.parse(localStorage.getItem("scoreName"));
  if (lastScore !== null) {
    highScoreList.textContent = lastScore.name + ": " + lastScore.score;
}
}

