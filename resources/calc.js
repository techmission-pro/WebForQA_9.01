function calculate() 
{
	const nomer1 = +document.querySelector('[name="num1"]').value;
	const nomer2 = +document.querySelector('[name="num2"]').value;
	const op = document.querySelector('[name="op"]').value;
	
	let result;
	
	if (op === 'plus') {result = nomer1+nomer2;}
	else if (op === 'minus') {result = nomer1-nomer2;}
	else if (op === 'multiply') {result = nomer1*nomer2;}
	else if (op === 'divide') {result = nomer1/nomer2;}
	else {console.error ('Помилка'); alert ('Alert'); }

document.querySelector('.calc-result').value = result;
}
document.querySelector('.calc-calculate').addEventListener('click', function () { calculate (); })
document.querySelector('[name="op"]').addEventListener('click', function () { calculate (); })
document.querySelector('[name=" num1"]').addEventListener('click', function () { calculate (); })
document.querySelector('[name=" num2"]').addEventListener('click', function () { calculate (); })
