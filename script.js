function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperature + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((temperature - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperature - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((temperature - 273.15) * 9/5) + 32;
    } else {
        result = temperature; // Same unit, no conversion needed
    }

    document.getElementById("result").textContent = `${result.toFixed(2)} ${toUnit}`;
}
