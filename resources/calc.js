function calculate() {
	const nam1 = +document.querySelector('[name="nam1"]').value;
	const nam2 = +document.querySelector('[name="nam2"]').value;
	const op = document.querySelector('[name="op"]').value;
	
	let result;
	
	if (op === 'plus') {
		result = nam1 + nam2;
	} else if (op === 'minus') {
		result = nam1 - nam2;
	} else if (op === 'multiply') {
		result = nam1 * nam2;
	} else if (op === 'divide') {
		result = nam1 / nam2;
	} else {
		console.error('wrong op:');
		alert('wrong operation is selected');
	}
	
	document.querySelector('.calc-result').value = result;
}

document.querySelector('.calc-calculate').addEventListener('click', function () {
	calculate();
});

document.querySelector('[name="op"]').addEventListener('change', function () {
	calculate();
});

document.querySelector('[name="nam1"]').addEventListener('input', function () {
	calculate();
});

document.querySelector('[name="nam2"]').addEventListener('input', function () {
	calculate();
});