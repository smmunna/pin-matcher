function myPin(){
    const pin = generatePin();
    return pin;
}
function generatePin(){
    const randomPin = Math.round((Math.random()*9000) + 1000);
    return randomPin;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = myPin();
    const pinShowField = document.getElementById('pin-show');
    pinShowField.value = pin;
})

document.getElementById('calculator-btn').addEventListener('click',function(event){
    const calculatorBtn = event.target.innerText;
    const displayNum = document.getElementById('display-num');
    const prevNumberField = displayNum.value;

    

    if(isNaN(calculatorBtn)){
        if (calculatorBtn === 'C') {
            displayNum.value = '';
        }
        else if(calculatorBtn==='<'){
            displayNum.value = '';
        }
    }
    else{
        displayNum.value = prevNumberField + calculatorBtn;
    }
})