document.querySelector('.calc-calculate').addEventListener('click', function () {
    const num1 = +document.querySelector('[name="num1"]').value;	
	const num2 = +document.querySelector('[name="num2"]').value;	
	
	const sun = num1 + num2;
	
	document.querySelector('.calc-result').value = sun;
});                                                                                      