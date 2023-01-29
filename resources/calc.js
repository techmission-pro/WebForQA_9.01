document.querySelector('.calc-calculate').addEventListener('click', function () {
    const numl = +document.querySelector('[name="num1"]').value;
    const num2 = +document.querySelector('[name="num2"]').value;
    const op = document.querySelector('[name="op"]').value;

    let result;

    if (op === 'plus') {
        result = numl + num2
    } else if (op === 'minus') {
        result = numl - num2
    } else if (op === 'multiply') {
        result = numl * num2
    } else if (op === 'divide') {
       result = numl / num2
    } else {
        console.error('Worng op!');
        alert('Wrong operation is selcted');
    }
    

    document.querySelector('.calc-result').value = result;
});

document.querySelector('.calc-calculate').addEventListener('click', function () {
    calculate();
});

document.querySelector('[name="op"]').addEventListener('change', function () {
    calculate();
});

document.querySelector('[name="num1"]').addEventListener('input', function () {
    calculate();
});

document.querySelector('[name="num2"]').addEventListener('input', function () {
    calculate();
});