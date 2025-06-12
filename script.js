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
  { question: "What punctuation is used in email addresses?", answer: "@" },
  { question: "What punctuation is used in hashtags?", answer: "#" },
  { question: "What punctuation separates clauses?", answer: "," },
  { question: "What punctuation ends exclamatory sentences?", answer: "!" },
  { question: "What punctuation is used to show quotations?", answer: "\"" },
  { question: "What punctuation is used in decimals?", answer: "." },
  { question: "What punctuation is used in fractions like 3/4?", answer: "/" },
  { question: "What punctuation indicates an abbreviation like Dr.?", answer: "." },
  { question: "What punctuation shows an aside (like this)?", answer: ")" },
  { question: "What punctuation can break up a sentence – like this?", answer: "–" },
  { question: "What punctuation is used in a question tag, like isn't it?", answer: "?" },
  { question: "What punctuation signals excitement?!", answer: "!" },
  { question: "What punctuation is used in code like <html>?", answer: "<" },
  { question: "What punctuation is used in percentages?", answer: "%" },
  { question: "What punctuation is used in equations like 5+3?", answer: "+" },
  { question: "What punctuation is used for footnotes?", answer: "*" }
];

let current = 0;

function showQuestion() {
  if (current < questions.length) {
    questionEl.innerText = `Level ${current + 1}: ${questions[current].question}`;
    input.value = "";
    feedback.innerText = "";
    input.focus();
  } else {
    questionEl.innerText = "Congratulations! You completed all 30 levels!";
    form.style.display = "none";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = input.value.trim();
  if (userAnswer === questions[current].answer) {
    feedback.innerText = "Correct!";
    current++;
    showQuestion();
  } else {
    feedback.innerText = "Try again.";
  }
});

showQuestion();
