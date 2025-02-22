document.getElementById('req-button').addEventListener('click', function () {

    const widthInput = getInputById('req-width-input');
    const lengthInput = getInputById('req-length-input');

    if (isNaN(widthInput) || isNaN(lengthInput)) {
        const errorText = document.createElement('h');
        errorText.innerText = 'Invalid input ! Please provide a number.';
        const inputContainer = document.getElementById('req-input-container')
        inputContainer.appendChild(errorText);
    }
    else {
        const area = widthInput * lengthInput;
        const areaContainer = document.getElementById('area-container');
        const resultText = document.createElement('p');
        resultText.innerText = ('Rectangle -----> ' + area);
        areaContainer.appendChild(resultText);
    }

    function getInputById(inputValue) {
        const inputField = document.getElementById(inputValue);
        const inputValueText = inputField.value;
        const input = parseFloat(inputValueText);
        return input;
    }
})