btnAdd.onclick = function calcAdd(){
    var num1 = Number(inptFirstNumber.value);
    var num2 = Number(inptSecondNumber.value);
    var addTotal = num1 + num2
    lblAnswer.value = addTotal;
};

btnMultiply.onclick = function calcMultiply(){
    var num1 = Number(inptFirstNumber.value);
    var num2 = Number(inptSecondNumber.value);
    var multiplyTotal = num1 * num2;
    lblAnswer.value = multiplyTotal;
};

btnReset.onclick = function calcReset(){
    var num1;
    var num2;
    lblAnswer.value = "";
};