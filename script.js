// Pantalla de inicio
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  showQuestion();
});

const form = document.getElementById("game-form");
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const questionEl = document.getElementById("question");

const questions = [
  { question: "What punctuation ends a question?", answer: "?" },
  { question: "What punctuation ends a sentence?", answer: "." },
  { question: "What punctuation shows excitement?", answer: "!" },
  { question: "What punctuation is used in a contraction like can't?", answer: "'" },
  { question: "What punctuation separates items in a list?", answer: "," },
  { question: "What punctuation is used for dialogue?", answer: "\"" },
  { question: "What punctuation is used to join two independent clauses?", answer: ";" },
  { question: "What punctuation introduces a list?", answer: ":" },
  { question: "What punctuation shows possession?", answer: "'" },
  { question: "What punctuation goes at the end of a command?", answer: "." },
  { question: "What punctuation is used in parentheses?", answer: ")" },
  { question: "What punctuation marks an omission or pause?", answer: "..." },
  { question: "What punctuation is used in web addresses?", answer: "/" },
  { question: "What punctuation is used to connect words like well-known?", answer: "-" },
  { question: "What punctuation is used in email addresses?", answer: "@" }
]; // solo 15 niveles

let current = 0;
let score = 0;
let timer;
const timeLimit = 30;
let timeLeft = timeLimit;

// Mostrar puntaje
const scoreDisplay = document.getElementById("score");
scoreDisplay.innerText = `Score: ${score}`;

// Mostrar temporizador
const timerDisplay = document.getElementById("timer");
timerDisplay.innerText = `Time left: ${timeLeft}s`;

// Iniciar temporizador
function startTimer() {
  clearInterval(timer);
  timeLeft = timeLimit;
  timerDisplay.innerText = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      score -= 5;
      feedback.innerText = "⏰ Time's up! −5 points.";
      updateScore();
      nextLevel();
    }
  }, 1000);
}

function updateScore() {
  scoreDisplay.innerText = `Score: ${score}`;
}

function showQuestion() {
  if (current < questions.length && current < 15) {
    questionEl.innerText = `Level ${current + 1}: ${questions[current].question}`;
    input.value = "";
    feedback.innerText = "";
    input.focus();
    startTimer();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(timer);
  questionEl.innerText = `🎉 Game Over! Your final score is: ${score}`;
  form.style.display = "none";
  timerDisplay.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = input.value.trim();
  clearInterval(timer);
  if (userAnswer === questions[current].answer) {
    feedback.innerText = "✅ Correct!";
    score += 10;
  } else {
    feedback.innerText = "❌ Incorrect! −5 points.";
    score -= 5;
  }
  updateScore();
  nextLevel();
});

function nextLevel() {
  current++;
  setTimeout(() => {
    showQuestion();
  }, 1000);
}
