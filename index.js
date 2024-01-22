const inputNumber = document.getElementById('inputNumber');
const celsius = document.getElementById('toCelsius');
const fahrenheit = document.getElementById('toFahrenheit');
const result = document.getElementById('result');
let temp;

function convert(){
    if(fahrenheit.checked) {
        temp = Number(inputNumber.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}°F`

    } else if(celsius.checked) {
        temp = Number(inputNumber.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp}°C`
    } else {
        result.textContent = "Select a Unit!";
    }
}