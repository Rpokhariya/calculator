
function RemoveErrorMsg() {
    const buttons = document.querySelectorAll('input[type="button"]');
    const display = document.getElementById('calc-display');

    function clearOnNextClick() {
        display.value = '';
        buttons.forEach(button => button.removeEventListener('click', clearOnNextClick));
    }

    buttons.forEach(button => button.addEventListener('click', clearOnNextClick));
}


function validateAndCalculate() {
    const display = document.getElementById('calc-display');
    const expression = display.value;

    const validExpression = /^[0-9+\-*/.() ]+$/;

    if (validExpression.test(expression)) {
        try {
            display.value = eval(expression);
        } catch (e) {
            display.value = 'Invalid Input';
            RemoveErrorMsg();
        }
    } else {
        display.value = 'Invalid Input';
        RemoveErrorMsg();
    }
}
