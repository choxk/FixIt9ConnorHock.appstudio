/* Create ONE of the following apps on a form using appStudio controls and javascript events.

Create a new form named calculator. It will let the user get the answer from adding or multiplying the two numbers, 
or clear the answer display.

Before you start to code, write out a rough algorithm of how to do this- pretend you are using a calculator 
with these buttons. Think about what you would do at each step.

Requirements:
    - // The program must use at least one button, label, and input control.
    - // The onlick event must be used. Other events can also be used, as desired.
    - // The program may not use any alerts or console.log for output.
    - All output must be done using a label or other control.
    - All input must preface with the users' name.
    - Use a button for each number, operator, and the equals sign
    - Use a label for the answer display
    - Use the control properties to specify how the control should look.
    - The user must be able to clear the old calculation and do another as many times as s/he likes.
*/

num 1 = "";
num 2 = "";

btnAdd.onclick = function addBy(){
    num1 = Number(inptFirstNumber);
    num2 = Number(inptSecondNumber);
    lblAnswer.value = (num1 + num2);
}

btnMultiply.onclick = function multipleBy(){
    num1 = Number(inptFirstNumber);
    num2 = Number(inptSecondNumber);
    lblAnswer.value = (num1 * num2);
}

btnReset.onclick = function reset(){
    num1 = "";
    num2 = "";
    lblAnswer.value = "";
}