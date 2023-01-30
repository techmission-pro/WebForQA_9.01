document.querySelector('.calc-calculate').addEventListener('click', function () {
const nam1 = + document.querySelector('[name="nam1"]').value;
const nam2 = + document.querySelector('[name="nam2"]').value;
 const sum = nam1 + nam2;
 document.querySelector ('.calc-result').value = sum;
});