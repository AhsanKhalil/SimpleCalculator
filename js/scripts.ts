window.onload = function () {
    document.getElementById("btn1").onclick = function () { Button1Click(); }
    document.getElementById("btn2").onclick = function () { Button2Click(); }
    document.getElementById("btn3").onclick = function () { Button3Click(); }
    document.getElementById("btn4").onclick = function () { Button4Click(); }
    document.getElementById("btn5").onclick = function () { Button5Click(); }
    document.getElementById("btn6").onclick = function () { Button6Click(); }
    document.getElementById("btn7").onclick = function () { Button7Click(); }
    document.getElementById("btn8").onclick = function () { Button8Click(); }
    document.getElementById("btn9").onclick = function () { Button9Click(); }
    document.getElementById("btn0").onclick = function () { Button0Click(); }

    document.getElementById("btnDivide").onclick = function () { ButtonDivideClick(); }
    document.getElementById("btnMultiply").onclick = function () { ButtonMultiplyClick(); }
    document.getElementById("btnPlus").onclick = function () { ButtonPlusClick(); }
    document.getElementById("btnMinus").onclick = function () { ButtonMinusClick(); }
    document.getElementById("btnDot").onclick = function () { ButtonDotClick(); }
    document.getElementById("btnClear").onclick = function () { ButtonClearClick(); }
    document.getElementById("btnEqual").onclick = function () { ButtonEqualClick(); }

}

var txDisplay=<HTMLInputElement>document.getElementById("txtDisplay");

function Button1Click() {
    txDisplay.value = txDisplay.value + "1";
}

function Button2Click() {
    txDisplay.value = txDisplay.value + "2";
}
function Button3Click() {
    txDisplay.value = txDisplay.value + "3";
}
function Button4Click() {
    txDisplay.value = txDisplay.value + "4";
}
function Button5Click() {
    txDisplay.value = txDisplay.value + "5";
}
function Button6Click() {
    txDisplay.value = txDisplay.value + "6";
}
function Button7Click() {
    txDisplay.value = txDisplay.value + "7";
}
function Button8Click() {
    txDisplay.value = txDisplay.value + "8";
}
function Button9Click() {
    txDisplay.value = txDisplay.value + "9";
}
function Button0Click() {
    txDisplay.value = txDisplay.value + "0";
}

function ButtonDivideClick() {
    if (txDisplay.value != "") {
        txDisplay.value = txDisplay.value + "/";
    }
}

function ButtonMultiplyClick() {
    if (txDisplay.value != "") {
        txDisplay.value = txDisplay.value + "*";
    }
}

function ButtonPlusClick() {
    if (txDisplay.value != "") {
        txDisplay.value = txDisplay.value + "+";
    }
}

function ButtonMinusClick() {
    if (txDisplay.value != "") {
        txDisplay.value = txDisplay.value + "-";
    }
}

function ButtonDotClick() {
    if (txDisplay.value != "") {
        txDisplay.value = txDisplay.value + ".";
    }
}

function ButtonClearClick() {
    txDisplay.value = "";
}

function ButtonEqualClick() {
    try{        
        if (txDisplay.value != "") {
            txDisplay.value = eval(txDisplay.value);
        }
    }
    catch(e){
        alert(e.message)
    }
}