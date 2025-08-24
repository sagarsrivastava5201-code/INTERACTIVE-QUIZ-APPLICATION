// Questions array
const questions = [
    {
        question: "Question : What is the full form of the HTML?",
        options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "High Text Markup Language", "None"],
        answer: 1
        
    },
    {
        question: "Question : Why use of the CSS",
        options: ["Structure", "Styling", "Logic", "Database"],
        answer: 1
    },
    {
        question: "Question : why use of the javaScript ",
        options: ["Database", "Web styling", "Web interactivity", "Hosting"],
        answer: 2
    },

    {
        question: "Question : Who is the Prime Minister of the india?  ",
        options: ["Amit shah ", "Narendra Damodardas Modi ", "Rahul gandhi ", "None"],
        answer: 1
    },
    {
        question: "Question : In javaScript , What is the result 'type of null? ",
        options: ["null","undefined","error","object"],
        answer: 3
    },
    {
        question: "Question : Which function is use to display output in JavaScript?",
        options: ["print()","console.log()", " display","alertbox"],
        answer: 1
    }, 
]; 

let currentQuestionIndex = 0;
let score = 0;


// Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

// Load question
function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement("div");
        btn.textContent = option;
        btn.classList.add("option");
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
        

    });
    
    
}

// Check answer
function checkAnswer(selectedIndex) {
    let correctIndex = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll(".option");
   

    options.forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add("correct");
        }
        if (index === selectedIndex && index !== correctIndex) {
            option.classList.add("wrong");
        }
        option.style.pointerEvents = "none"; // Disable further clicks
    });

    if (selectedIndex === correctIndex) {
        score++;
    }
  
 
}

// Next question
function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
   

}

// Show result
function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = ` ${score} OUT OF  ${questions.length};`
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultEl.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

// Initial load
loadQuestion();



let h1= document.querySelector("h1");{

    setInterval(() => {
    h1.style.color="red"
}, 1000);
setInterval(() => {
    h1.style.color="blue"
}, 2000);
setInterval(() => {
    h1.style.color="green"
}, 3000);
};

