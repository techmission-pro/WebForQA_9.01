document.querySelector ('.calc-button-result').addEventListener('click', function () {
const num1 = Number(document.querySelector ('[name="num1"]').value);
const num2 = +document.querySelector ('[name="num2"]').value;
const operation=document.getElementById("operation").value;
let result;
if (operation == "plus"){
    result = num1 + num2;
}else if (operation == "minus"){
    result = num1 - num2;
}else if (operation == "dobutok"){
    result = num1 * num2;
}else if(operation == "chastka"){
    result = num1 / num2;
}
document.querySelector('.calc-result').value = result;
} );