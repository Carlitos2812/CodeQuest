const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const form = document.getElementById("game-form");
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const questionEl = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const languageSelect = document.getElementById("language-select");
const submitButton = document.getElementById("submit-button");

let language = "es";

const preguntas = {
  es: [
    { pregunta: "¿Qué signo de puntuación termina una pregunta?", respuesta: "?" },
    { pregunta: "¿Qué signo de puntuación termina una oración?", respuesta: "." },
    { pregunta: "¿Qué signo muestra emoción o sorpresa?", respuesta: "!" },
    { pregunta: "¿Qué signo se usa en contracciones como can't?", respuesta: "'" },
    { pregunta: "¿Qué signo separa elementos en una lista?", respuesta: "," },
    { pregunta: "¿Qué signo se usa para el diálogo?", respuesta: "\"" },
    { pregunta: "¿Qué signo une dos oraciones independientes?", respuesta: ";" },
    { pregunta: "¿Qué signo introduce una lista?", respuesta: ":" },
    { pregunta: "¿Qué signo muestra posesión?", respuesta: "'" },
    { pregunta: "¿Qué signo se usa al final de una orden?", respuesta: "." },
    { pregunta: "¿Qué signo se encuentra en los paréntesis?", respuesta: ")" },
    { pregunta: "¿Qué signo marca una omisión o pausa?", respuesta: "..." },
    { pregunta: "¿Qué signo se usa en direcciones web?", respuesta: "/" },
    { pregunta: "¿Qué signo conecta palabras como bienvenido?", respuesta: "-" },
    { pregunta: "¿Qué signo se usa en correos electrónicos?", respuesta: "@" }
  ],
  en: [
    { pregunta: "What punctuation ends a question?", respuesta: "?" },
    { pregunta: "What punctuation ends a sentence?", respuesta: "." },
    { pregunta: "What punctuation shows excitement?", respuesta: "!" },
    { pregunta: "What punctuation is used in contractions like can't?", respuesta: "'" },
    { pregunta: "What punctuation separates items in a list?", respuesta: "," },
    { pregunta: "What punctuation is used for dialogue?", respuesta: "\"" },
    { pregunta: "What punctuation joins two independent clauses?", respuesta: ";" },
    { pregunta: "What punctuation introduces a list?", respuesta: ":" },
    { pregunta: "What punctuation shows possession?", respuesta: "'" },
    { pregunta: "What punctuation ends a command?", respuesta: "." },
    { pregunta: "What punctuation is used in parentheses?", respuesta: ")" },
    { pregunta: "What punctuation marks an omission or pause?", respuesta: "..." },
    { pregunta: "What punctuation is used in web addresses?", respuesta: "/" },
    { pregunta: "What punctuation connects words like well-known?", respuesta: "-" },
    { pregunta: "What punctuation is used in email addresses?", respuesta: "@" }
  ]
};

let actual = 0;
let puntaje = 0;
let temporizador;
const limiteTiempo = 30;
let tiempoRestante = limiteTiempo;

function actualizarPuntaje() {
  scoreDisplay.innerText = (language === "es")
    ? `Puntaje: ${puntaje}`
    : `Score: ${puntaje}`;
}

function iniciarTemporizador() {
  clearInterval(temporizador);
  tiempoRestante = limiteTiempo;
  timerDisplay.innerText = (language === "es")
    ? `Tiempo: ${tiempoRestante}s`
    : `Time: ${tiempoRestante}s`;

  temporizador = setInterval(() => {
    tiempoRestante--;
    timerDisplay.innerText = (language === "es")
      ? `Tiempo: ${tiempoRestante}s`
      : `Time: ${tiempoRestante}s`;
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      feedback.innerText = (language === "es")
        ? "⏰ ¡Tiempo agotado! −5 puntos."
        : "⏰ Time's up! −5 points.";
      puntaje -= 5;
      actualizarPuntaje();
      siguienteNivel();
    }
  }, 1000);
}

function mostrarPregunta() {
  const lista = preguntas[language];
  if (actual < lista.length) {
    questionEl.innerText = `Nivel ${actual + 1}: ${lista[actual].pregunta}`;
    input.value = "";
    feedback.innerText = "";
