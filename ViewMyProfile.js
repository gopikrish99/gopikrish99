let one = document.getElementById("button");
let two = document.getElementById("bgContainer");

let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

two.style.backgroundColor = bgColorsArray[0];

function colorchange() {
    let allColor = bgColorsArray.length;
    let index = Math.ceil(Math.random() * allColor)

    if (index === allColor) {
        index = allColor - 1;
    }
    let randomColor = bgColorsArray[index];
    two.style.backgroundColor = randomColor
}


let colorone = document.getElementById("colorPickerContainer");
let colortwo = document.getElementById("selectedColorHexCode")

function colorgreyandtext() {
    colorone.style.backgroundColor = "#e0e0e0";
    colortwo.textContent = "#e0e0e0";
}

function colorgreyandtext1() {
    colorone.style.backgroundColor = "#6fcf97";
    colortwo.textContent = "#6fcf97";
}

function colorgreyandtext2() {
    colorone.style.backgroundColor = "#56ccf2";
    colortwo.textContent = "#56ccf2";
}

function colorgreyandtext3() {
    one.style.backgroundColor = "#bb6bd9";
    two.textContent = "#bb6bd9";
}

let oney = document.getElementById("stopButton");
let twoy = document.getElementById("readyButton");
let threey = document.getElementById("goButton");
let foury = document.getElementById("stopLight");
let fivey = document.getElementById("readyLight");
let sixy = document.getElementById("goLight");

function redcolor() {
    oney.style.backgroundColor = "#cf1124"
    foury.style.backgroundColor = "#cf1124"
    twoy.style.backgroundColor = "#1f1d41"
    fivey.style.backgroundColor = "#4b5069"
    threey.style.backgroundColor = "#1f1d41"
    sixy.style.backgroundColor = "#4b5069"
}

function middlecolor() {
    oney.style.backgroundColor = "#1f1d41"
    foury.style.backgroundColor = "#4b5069"
    twoy.style.backgroundColor = "#f7c948"
    fivey.style.backgroundColor = "#f7c948"
    threey.style.backgroundColor = "#1f1d41"
    sixy.style.backgroundColor = "#4b5069"
}

function lastcolor() {
    oney.style.backgroundColor = "#1f1d41"
    foury.style.backgroundColor = "#4b5069"
    twoy.style.backgroundColor = "#1f1d41"
    fivey.style.backgroundColor = "#4b5069"
    threey.style.backgroundColor = "#199473"
    sixy.style.backgroundColor = "#199473"
}