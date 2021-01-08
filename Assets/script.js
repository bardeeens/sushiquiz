var timerEl = document.getElementById("timer")
var timeTilTest = 6
var testDuration = 91
var startButton = document.getElementById("start-button")
var questionIndex = 0;
var entireQuiz = [
    {
        q: "Assets/Images/salmon.jpg",
        choices: ["salmon", "octopus", "tuna", "crab"],
        answer: "salmon"
    },
    {
        q: "/Assets/Images/salmonwcilantro.jpg",
        choices: ["salmon", "octopus", "tuna", "crab"],
        answer: "salmon"
    }
];

function countDownToQuiz() {
    var timerInterval = setInterval(function() {
        timeTilTest--;
        timerEl.textContent = "Quiz will begin in " + timeTilTest + " seconds!";

        if(timeTilTest === 1) {
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

function testTimer() {
    var timerInterval = setInterval(function() {
        testDuration--;
        timerEl.textContent = testDuration + " seconds left";

        if(testDuration === 1) {
            timerEl.textContent = testDuration + " second left";
        } else if (testDuration === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "You have ran out of time!"
            // beginQuiz();
        }
    }, 1000)
    
}

function displayQuestion() {
// 
var questionImage = document.createElement("img");
    questionImage.setAttribute("src", entireQuiz[questionIndex].q)
    document.querySelector(".box").appendChild(questionImage)


    for (let i = 0; i < entireQuiz[questionIndex].choices.length; i++) {

        const choice = entireQuiz[questionIndex].choices[i]
        var button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function(){
            var userChoice = this.textContent
            console.log(userChoice);
            checkAnswer(userChoice);
            // get text value from choice
            // check answer 
            //if answer = choice, right
            // if right score increase
            //if answer != choice, wrong
            //if wrong timer -5
            //
        })
        document.querySelector(".box").appendChild(button);

    }

}


function currentAnswer() {
    return entireQuiz[questionIndex].answer
}

function checkAnswer(userChoice) {
   if (userChoice === currentAnswer()) {
       
   }
   
   
   
   
    questionIndex++;
}

function beginQuiz() {
    var question = document.createElement("main");
    question.textContent = "What kind of sushi is this?";
    question.setAttribute("class", "question");
    document.querySelector(".box").appendChild(question);

    displayQuestion();
};

startButton.addEventListener("click", function(){
    countDownToQuiz();

    });

console.log(entireQuiz[0].q);