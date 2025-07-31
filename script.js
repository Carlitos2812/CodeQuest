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
];

let current = 0;
let score = 0;
let timer;
const timeLimit = 30;
let timeLeft = timeLimit;

const scoreDisplay = document.createElement("p");
scoreDisplay.id = "score";
scoreDisplay.innerText = `Score: ${score}`;
document.querySelector(".container").appendChild(scoreDisplay);

const timerDisplay = document.createElement("p");
timerDisplay.id = "timer";
timerDisplay.innerText = `Time left: ${timeLeft}s`
