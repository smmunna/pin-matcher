function myPin() {
    const pin = generatePin();
    return pin;
}
function generatePin() {
    const randomPin = Math.round((Math.random() * 9000) + 1000);
    return randomPin;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = myPin();
    const pinShowField = document.getElementById('pin-show');
    pinShowField.value = pin;
})

document.getElementById('calculator-btn').addEventListener('click', function (event) {
    const calculatorBtn = event.target.innerText;
    const displayNum = document.getElementById('display-num');
    const prevNumberField = displayNum.value;



    if (isNaN(calculatorBtn)) {
        if (calculatorBtn === 'C') {
            displayNum.value = '';
        }
        else if (calculatorBtn === '<') {
           const digits = prevNumberField.split('');
           digits.pop();
           const remaining = digits.join('');
           displayNum.value = remaining;
        }
    }
    else {
        displayNum.value = prevNumberField + calculatorBtn;
    }
})

document.getElementById('submit').addEventListener('click', function () {
    const pinShowField = document.getElementById('pin-show');
    const autoPin = pinShowField.value;

    const displayNum = document.getElementById('display-num');
    const myPin = displayNum.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailMessage = document.getElementById('pin-fail');



    if (myPin === '') {
        alert('Blank Input Box,Please write the OTP first');
    } else {
        if (autoPin === myPin) {
            pinSuccessMessage.style.display = 'block';
            pinFailMessage.style.display = 'none';
        } else {
            pinFailMessage.style.display = 'block';
            pinSuccessMessage.style.display = 'none';
        }
    }
})