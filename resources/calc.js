function calculator() {
	const num1 = parseFloat(document.querySelector('[name="num1"]'). value);
	const num2 = parseFloat(document.querySelector('[name="num2"]'). value);
	const operation = document.querySelector('[name="operation"]'). value;
	
	let result;
	if (operation === 'plus') {
		result = num1 + num2;
	} else if (operation === 'minus') {
		result = num1 - num2;
	} else if (operation === 'multiply') {
		result = num1 * num2;
	} else if (operation === 'divide') {
		result = num1 / num2;
	} else {
		console.error('Wrong operation');
		alert('Wrong operation is selected');
	}
	
	document.querySelector('.calc-result').innerText = result;
}
document.querySelector('.calculate').addEventListener('click', function () {
	calculator();
});

document.querySelector('[name="operation"]').addEventListener('change', function () {
	calculator();
});

document.querySelector('[name="num1"]').addEventListener('change', function () {
	calculator();
});

document.querySelector('[name="num2"]').addEventListener('input', function () {
	calculator();
});