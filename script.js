function convertTemperature() {
    const inputValue = document.querySelector('input[type="number"]').value;
    const fromUnit = document.getElementById('selectInput').value;
    const toUnit = document.getElementById('selectConvert').value;
    
    let result;

    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            result = (inputValue * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = parseFloat(inputValue) + 273.15;
        } else {
            result = inputValue; 
        }
    } else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
            result = (inputValue - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (inputValue - 32) * 5/9 + 273.15;
        } else {
            result = inputValue; 
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'Celsius') {
            result = inputValue - 273.15;
        } else if (toUnit === 'Fahrenheit') {
            result = (inputValue - 273.15) * 9/5 + 32;
        } else {
            result = inputValue; 
        }
    }

    document.querySelector('.result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
}