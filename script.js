const poundsInput = document.getElementById("poundsInput");
const result = document.getElementById("result");
const errorMsg = document.getElementById("errorMsg");
let timeoutId;

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
  setTimeout(() => {
    errorMsg.style.display = "none";
  }, 2000);
}

function clearResultAndInput() {
  poundsInput.value = "";
  result.textContent = "Your weight in kg is:";
}

function handleConversion() {
  const pounds = parseFloat(poundsInput.value);
  if (isNaN(pounds)) {
    result.textContent = "Your weight in kg is:";
    return;
  }
  if (pounds < 0) {
    showError("Please enter a valid number.");
    result.textContent = "Your weight in kg is:";
    return;
  }
  const kg = (pounds * 0.453592).toFixed(2);
  result.textContent = `Your weight in kg is: ${kg}`;
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    clearResultAndInput();
  }, 10000);
}

poundsInput.addEventListener("input", handleConversion);
