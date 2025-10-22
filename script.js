// Botones del menú principal
const btnPunctuation = document.getElementById("btn-punctuation");
const btnScience = document.getElementById("btn-science");
const btnSocial = document.getElementById("btn-social");
const btnMemory = document.getElementById("btn-memory");

// Pantallas
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const scienceScreen = document.getElementById("science-screen");
const socialScreen = document.getElementById("social-screen");
const memoryScreen = document.getElementById("memory-screen");

// Botones "Volver"
const backButtons = document.querySelectorAll(".back-btn");

// Elementos del juego original
const form = document.getElementById("game-form");
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const questionEl = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const submitButton = document.getElementById("submit-btn");

let language = "es";
let current = 0;
let score = 0;
let timer;
const timeLimit = 30;
let timeLeft = timeLimit;

// Preguntas del Punctuation Master
const questions = [
  { question: "¿Qué signo de puntuación termina una pregunta?", answer: "?" },
  { question: "¿Qué signo de puntuación termina una oración?", answer: "." },
  { question: "¿Qué signo muestra emoción?", answer: "!" },
  { question: "¿Qué signo separa elementos en una lista?", answer: "," },
  { question: "¿Qué signo se usa en direcciones web?", answer: "/" },
  { question: "¿Qué signo une palabras como 'bien-estar'?", answer: "-" },
  { question: "¿Qué signo se usa en correos electrónicos?", answer: "@" }
];

// 🔹 FUNCIONES DEL MENÚ
btnPunctuation.addEventListener("click", () => showScreen(gameScreen));
btnScience.addEventListener("click", () => showScreen(scienceScreen));
btnSocial.addEventListener("click", () => showScreen(socialScreen));
btnMemory.addEventListener("click", () => showScreen(memoryScreen));

backButtons.forEach(btn => {
  btn.addEventListener("click", () => showScreen(mainMenu));
});

function showScreen(screen) {
  [mainMenu, gameScreen, scienceScreen, socialScreen, memoryScreen].forEach(s => s.style.display = "none");
  screen.style.display = "block";
  if (screen === gameScreen) startGame();
}

// 🔹 FUNCIONES DEL JUEGO ORIGINAL
function updateScore() {
  scoreDisplay.innerText = `Puntaje: ${score}`;
}

function startTimer() {
  clearInterval(timer);
  timeLeft = timeLimit;
  timerDisplay.innerText = `⏱️ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      score -= 5;
      feedback.innerText = "⏰ ¡Tiempo agotado! −5 puntos.";
      updateScore();
      nextLevel();
    }
  }, 1000);
}

function mostrarPregunta() {
  if (current < questions.length) {
    questionEl.innerText = `Nivel ${current + 1}: ${questions[current].question}`;
    input.value = "";
    feedback.innerText = "";
    input.focus();
    startTimer();
  } else terminarJuego();
}

function terminarJuego() {
  clearInterval(timer);
  questionEl.innerText = `🎉 ¡Juego terminado! Puntaje final: ${score}`;
  form.style.display = "none";
  timerDisplay.style.display = "none";
}

function nextLevel() {
  current++;
  setTimeout(() => mostrarPregunta(), 1000);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  clearInterval(timer);
  const userAnswer = input.value.trim();

  if (userAnswer === questions[current].answer) {
    feedback.innerText = "✅ ¡Correcto!";
    score += 10;
  } else {
    feedback.innerText = "❌ Incorrecto −5 puntos.";
    score -= 5;
  }
  updateScore();
  nextLevel();
});

function startGame() {
  score = 0;
  current = 0;
  form.style.display = "block";
  timerDisplay.style.display = "block";
  updateScore();
  mostrarPregunta();
}
