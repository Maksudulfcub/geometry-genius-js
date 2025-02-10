document.getElementById('button').addEventListener('click', function () {
    const base = document.getElementById('base-input').value;
    const baseValue = parseInt(base);
    const height = document.getElementById('height-input').value;
    const heightValue = parseInt(height);
    console.log(typeof baseValue, typeof heightValue)

    if (isNaN(baseValue) || isNaN(heightValue)) {
        const errorText = document.createElement('h3');
        errorText.innerText = 'Invalid input ! Please provide a number.';
        const inputContainer = document.getElementById('input-container');
        inputContainer.appendChild(errorText);
    }
    else {
        const area = 0.5 * baseValue * heightValue;

        const areaContainer = document.getElementById('area-container');
        const resultText = document.createElement('p');
        resultText.innerText = ('Triangle ' + area);
        areaContainer.appendChild(resultText);
    }
})