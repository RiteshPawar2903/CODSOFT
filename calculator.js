document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('input[name="display"]');
    
    function handleButtonClick(e) {
        const buttonValue = e.target.value;

        if (buttonValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (buttonValue === 'AC') {
            display.value = '';
        } else if (buttonValue === 'DE') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += buttonValue;
        }
    }

    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    });
});
