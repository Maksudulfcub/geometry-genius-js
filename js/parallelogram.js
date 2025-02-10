document.getElementById('para-button').addEventListener('click', function () {

    const baseInput = getInputById('para-base-input');
    const heightInput = getInputById('para-height-input');

    if (isNaN(baseInput) || isNaN(heightInput)) {
        const errorText = document.createElement('h');
        errorText.innerText = 'Invalid input ! Please provide a number.';
        const inputContainer = document.getElementById('para-input-container')
        inputContainer.appendChild(errorText);
    }
    else {
        const area = baseInput * heightInput;
        const areaContainer = document.getElementById('area-container');
        const resultText = document.createElement('p');
        resultText.innerText = ('Parallelogram ----> ' + area);
        areaContainer.appendChild(resultText);
    }

    function getInputById(inputValue) {
        const inputField = document.getElementById(inputValue);
        const inputValueText = inputField.value;
        const input = parseFloat(inputValueText);
        return input;
    }
})