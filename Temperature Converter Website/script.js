function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let valueInCelsius;

    
    if (inputUnit === 'celsius') {
        valueInCelsius = inputValue;
    } else if (inputUnit === 'fahrenheit') {
        valueInCelsius = (inputValue - 32) * 5 / 9;
    } else if (inputUnit === 'kelvin') {
        valueInCelsius = inputValue - 273.15;
    }

    
    let outputValue;
    if (outputUnit === 'celsius') {
        outputValue = valueInCelsius;
    } else if (outputUnit === 'fahrenheit') {
        outputValue = (valueInCelsius * 9 / 5) + 32;
    } else if (outputUnit === 'kelvin') {
        outputValue = valueInCelsius + 273.15;
    }

    document.getElementById('outputValue').value = outputValue.toFixed(2);
}
