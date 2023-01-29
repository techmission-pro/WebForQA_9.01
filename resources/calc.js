console.log('Calculator');

// function func(){
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);
//      calc-result = ???

//     const calc-result = num1 + num2;

//     document.getElementById("calc-result").innerHTML = calc-result;
//     }


function calculate () {
	const num1 = +document.querySelector('[name="num1"]').value;
	const num2 = +document.querySelector('[name="num2"]').value;
	const operator = document.querySelector('[name="operator"]').value;
	
	let result;
	
	if (operator === 'plus') {
		result = num1 + num2;
	} else if (operator === 'minus') {
		result = num1 - num2;
	} else if (operator === 'multiply') {
		result = num1 * num2;	
	} else if (operator === 'divide') {
		result = num1 / num2;	
	} else {
        console.error( 'Error!!!!!!');
        alert('Wrong operation')
	}	
	
	document.querySelector('.calc-result').value = result;
}

document.querySelector('.calc-button').addEventListener('click', function (){ 
    calculate();
});	 
document. querySelector('[name="operator"]').addEventListener('change', function (){ 
    calculate();
});
document. querySelector('[name="num1"]').addEventListener('input', function (){ 
    calculate();
});
document. querySelector('[name="num2"]').addEventListener('input', function (){ 
    calculate();
});