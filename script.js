// ================================
// 🌌 CODEQUEST UNIVERSE MAIN SCRIPT
// ================================

// --- Pantallas ---
const mainMenu = document.getElementById("main-menu");
const gameScreen = document.getElementById("game-screen");
const scienceScreen = document.getElementById("science-screen");
const socialScreen = document.getElementById("social-screen");
const memoryScreen = document.getElementById("memory-screen");

// --- Botones del menú ---
const btnPunctuation = document.getElementById("btn-punctuation");
const btnScience = document.getElementById("btn-science");
const btnSocial = document.getElementById("btn-social");
const btnMemory = document.getElementById("btn-memory");
const backButtons = document.querySelectorAll(".back-btn");

// ================================
// 🧩 JUEGO: Punctuation Master
// ================================
const form = document.getElementById("game-form");
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const questionEl = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const languageSelect = document.getElementById("language-select");
const submitButton = document.getElementById("submit-btn");
const backToMenuBtn = document.getElementById("back-to-menu");

let language = "en";
let current = 0;
let score = 0;
let timer;
const timeLimit = 30;
let timeLeft = timeLimit;

// ================================
// 🧠 BASE DE PREGUNTAS
// ================================
const questions = {
  en: [
    { question: "What punctuation ends a question?", answer: "?" },
    { question: "What punctuation ends a sentence?", answer: "." },
    { question: "What punctuation shows excitement?", answer: "!" },
    { question: "What punctuation is used in a contraction like can't?", answer: "'" },
    { question: "What punctuation separates items in a list?", answer: "," },
    { question: "What punctuation is used for dialogue?", answer: "\"" },
    { question: "What punctuation joins two clauses?", answer: ";" },
    { question: "What punctuation introduces a list?", answer: ":" },
    { question: "What punctuation shows possession?", answer: "'" },
    { question: "What punctuation ends a command?", answer: "." },
    { question: "What punctuation is used in parentheses?", answer: ")" },
    { question: "What punctuation marks a pause or omission?", answer: "..." },
    { question: "What punctuation is used in web addresses?", answer: "/" },
    { question: "What punctuation connects words like well-known?", answer: "-" },
    { question: "What punctuation is used in email addresses?", answer: "@" }
  ],
  es: [
    { question: "¿Qué signo de puntuación termina una pregunta?", answer: "?" },
    { question: "¿Qué signo de puntuación termina una oración?", answer: "." },
    { question: "¿Qué signo muestra emoción?", answer: "!" },
    { question: "¿Qué signo se usa en contracciones como 'no puedo' (can't)?", answer: "'" },
    { question: "¿Qué signo separa elementos en una lista?", answer: "," },
    { question: "¿Qué signo se usa para el diálogo?", answer: "\"" },
    { question: "¿Qué signo une dos oraciones independientes?", answer: ";" },
    { question: "¿Qué signo introduce una lista?", answer: ":" },
    { question: "¿Qué signo muestra posesión?", answer: "'" },
    { question: "¿Qué signo termina un mandato o instrucción?", answer: "." },
    { question: "¿Qué signo se usa entre paréntesis?", answer: ")" },
    { question: "¿Qué signo indica una pausa u omisión?", answer: "..." },
    { question: "¿Qué signo se usa en direcciones web?", answer: "/" },
    { question: "¿Qué signo une palabras como 'bien-estar'?", answer: "-" },
    { question: "¿Qué signo se usa en correos electrónicos?", answer: "@" }
  ]
};

// ================================
// ⚙️ FUNCIONES DEL JUEGO
// ================================
function updateScore() {
  
