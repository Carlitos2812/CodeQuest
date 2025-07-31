const startButton = document.getElementById("start-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const form = document.getElementById("game-form");
const input = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const questionEl = document.getElementById("question");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

const preguntas = [
  { pregunta: "¿Qué signo de puntuación termina una pregunta? / What punctuation ends a question?", respuesta: "?" },
  { pregunta: "¿Qué signo de puntuación termina una oración? / What punctuation ends a sentence?", respuesta: "." },
  { pregunta: "¿Qué signo muestra emoción o sorpresa? / What punctuation shows excitement?", respuesta: "!" },
  { pregunta: "¿Qué signo se usa en contracciones como can't? / What punctuation is used in contractions like can't?", respuesta: "'" },
  { pregunta: "¿Qué signo separa elementos en una lista? / What punctuation separates items in a list?", respuesta: "," },
  { pregunta: "¿Qué signo se usa para el diálogo? / What punctuation is used for dialogue?", respuesta: "\"" },
  { pregunta: "¿Qué signo une dos oraciones independientes? / What punctuation joins two independent clauses?", respuesta: ";" },
  { pregunta: "¿Qué signo introduce una lista? / What punctuation introduces a list?", respuesta: ":" },
  { pregunta: "¿Qué signo muestra posesión? / What punctuation shows possession?", respuesta: "'" },
  { pregunta: "¿Qué signo se usa al final de una orden? / What punctuation ends a command?", respuesta: "." },
  { pregunta: "¿Qué signo se encuentra en los paréntesis? / What punctuation is used in parentheses?", respuesta: ")" },
  { pregunta: "¿Qué signo marca una omisión o pausa? / What punctuation marks an omission or pause?", respuesta: "..." },
  { pregunta: "¿Qué signo se usa en direcciones web? / What punctuation is used in web addresses?", respuesta: "/" },
  { pregunta: "¿Qué signo conecta palabras como bienvenido? / What punctuation connects words like well-known?", respuesta: "-" },
  { pregunta: "¿Qué signo se usa en correos electrónicos? / What punctuation is used in email addresses?", respuesta: "@" }
];

let actual = 0;
let puntaje = 0;
let temporizador;
const limiteTiempo = 30;
let tiempoRestante = limiteTiempo;

function actualizarPuntaje() {
  scoreDisplay.innerText = `Puntaje: ${puntaje}`;
}

function iniciarTemporizador() {
  clearInterval(temporizador);
  tiempoRestante = limiteTiempo;
  timerDisplay.innerText = `Tiempo: ${tiempoRestante}s`;

  temporizador = setInterval(() => {
    tiempoRestante--;
    timerDisplay.innerText = `Tiempo: ${tiempoRestante}s`;
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      feedback.innerText = "⏰ ¡Tiempo agotado! −5 puntos.";
      puntaje -= 5;
      actualizarPuntaje();
      siguienteNivel();
    }
  }, 1000);
}

function mostrarPregunta() {
  if (actual < preguntas.length) {
    questionEl.innerText = `Nivel ${actual + 1}: ${preguntas[actual].pregunta}`;
    input.value = "";
    feedback.innerText = "";
    input.focus();
    iniciarTemporizador();
  } else {
    finalizarJuego();
  }
}

function siguienteNivel() {
  actual++;
  setTimeout(mostrarPregunta, 1000);
}

function finalizarJuego() {
  clearInterval(temporizador);
  questionEl.innerText = `🎉 ¡Juego terminado! Tu puntaje final es: ${puntaje}`;
  form.style.display = "none";
  timerDisplay.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const respuestaUsuario = input.value.trim();
  clearInterval(temporizador);
  if (respuestaUsuario === preguntas[actual].respuesta) {
    feedback.innerText = "✅ ¡Correcto!";
    puntaje += 10;
  } else {
    feedback.innerText = "❌ Incorrecto. −5 puntos.";
    puntaje -= 5;
  }
  actualizarPuntaje();
  siguienteNivel();
});

startButton.addEventListener("click", () => {
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  mostrarPregunta();
});
