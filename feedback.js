const feedbackForm = document.getElementById("feedback-form");
const submittedEl = document.getElementById("submittedEl");
const submitBtn = document.getElementById("submit-btn");

feedbackForm.addEventListener("submit", thankForSubmit);

function thankForSubmit(event) {
   event.preventDefault();
   submittedEl.textContent = "Thank you for submitting!";
   confetti({
      particleCount: 500,
      spread: 100,
   });
   feedbackForm.reset();
}
