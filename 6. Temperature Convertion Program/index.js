const textBox = document.getElementById('textbox')
const Celsius1 = document.getElementById('Celsius')
const Fahrenheit1 = document.getElementById('Fahrenheit')
const result1 = document.getElementById('result')
//const textBox = document.getElementById('textbox')

let temp;


function convert(){
    if (Fahrenheit1.checked){
        temp = Number(textBox.value);
        temp = temp *9 / 5 + 32;
        result1.textContent = temp.toFixed(1) + "°F";
    }
    else if(Celsius1.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result1.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result1.textContent="Select a Unit First";
    }
}