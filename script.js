document.getElementById('convert-button').addEventListener('click', function() {
    const inputTemperature = parseFloat(document.getElementById('temperature-input').value);
    const inputUnit = document.getElementById('unit-select').value;
    let resultText = '';

    if (isNaN(inputTemperature)) {
        resultText = 'Please enter a valid number';
    } else {
        if (inputUnit === 'C') {
            resultText = `${inputTemperature} °C = ${(inputTemperature * 9/5) + 32} °F = ${inputTemperature + 273.15} K`;
        } else if (inputUnit === 'F') {
            resultText = `${inputTemperature} °F = ${((inputTemperature - 32) * 5/9).toFixed(2)} °C = ${(((inputTemperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
        } else if (inputUnit === 'K') {
            resultText = `${inputTemperature} K = ${(inputTemperature - 273.15).toFixed(2)} °C = ${(((inputTemperature - 273.15) * 9/5) + 32).toFixed(2)} °F`;
        }
    }

    document.getElementById('result-text').innerText = resultText;
});
