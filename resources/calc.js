document.querySelector ('.calc-button-result').addEventListener('click', function () {
const num1 = Number(document.querySelector ('[name="num1"]').value);
const num2 = +document.querySelector ('[name="num2"]').value;
const sum = num1 + num2;
document.querySelector('.calc-result').value = sum;
} );