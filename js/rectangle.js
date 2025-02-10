document.getElementById('req-button').addEventListener('click', function () {

    const widthInput = getInputbyId('req-width-input');
    const lengthInput = getInputbyId('req-length-input');
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

    function getInputbyId(inputValue) {
        const width = document.getElementById(inputValue);
        const widthValueText = width.value;
        const widthValue = parseFloat(widthValueText);
        return widthValue;
    }
})