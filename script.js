const form = document.getElementById("game-form");
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const questionEl = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const gameContainer = document.getElementById("game-container");

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
  { question: "What punctuation connects words like well-known?", answer: "-" },
  { question: "What punctuation is used in email addresses?", answer: "@" }
];

let current = 0;
let score = 0;
let timer;
const timeLimit = 30;
let timeLeft = timeLimit;

// 🎵 Sounds
const bgMusic = document.getElementById("bg-music");
const startSound = new Audio("start-sound.mp3");
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

// 👾 Start game
startBtn.addEventListener("click", () => {
  startSound.play();
  bgMusic.volume = 0.3;
  bgMusic.play();
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  showQuestion();
});

// ⏱ Timer
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
  if (current < questions.length) {
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
  questionEl.innerText = `🎉 Game Over! Final score: ${score}`;
  form.style.display = "none";
  timerDisplay.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = input.value.trim();
  clearInterval(timer);
  if (userAnswer === questions[current].answer) {
    correctSound.play();
    feedback.innerText = "✅ Correct!";
    score += 10;
  } else {
    wrongSound.play();
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
