let calculation = "";
calculation = localStorage.getItem('calculation');

function updateCalculation(input) {
  calculation += input;
  console.log(calculation);
  return calculation;
}

function calculationResult() {
calculation = eval(calculation);
console.log(calculation);
}

function clearCalculation() {
  calculation = "";
}

function displayCalculation() {
  document.querySelector(".js-display-calc").innerHTML = calculation;
  localStorage.setItem('calculation', calculation);

}
displayCalculation();