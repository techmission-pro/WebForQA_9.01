function calculste() { 
    const num1 = +document.queryselector ('[name="num1"]').value;
    const num2 = +document.queryselector ('[name="num2"]').value;
    const op = document.queryselector ('[name="op"]').value;

    let result;

    if (op === 'plus') {
        result = num1 + num2;
    } else if (op === 'minus') {
        result = num1 - num2;
    } else if (op === 'multiply') {
        result = num1 * num2;
    } else if (op === 'divide') {
        result = num1 / num2;
    } else {
    console.error('Wrong op!');
    alert('Wrong operation is selected');
    }

    document.queryselector ('.calc-result').value = sum;
}

document.querySelector('.calc-calculate').addEventListener('click',function() {
    calculate();
});

document.querySelector('[name="op"]').addEventListener('change',function() {
    calculate();
});

}

document.querySelector('[name="num1"]').addEventListener('imput',function() {
    calculate();
});

document.querySelector('[name="num2"]').addEventListener('imput',function() {
    calculate();
});
    
   