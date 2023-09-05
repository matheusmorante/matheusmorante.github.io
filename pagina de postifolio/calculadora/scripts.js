var display = document.getElementById('display');


function Insert(num) {
    display.innerHTML += num;
};

function Clean() {
    display.innerHTML = "";
};

function Backspace() {
    display.innerHTML = display.innerHTML.slice(0, -1);
};

function Return() {
    currentnumber = document.getElementById('display').innerHTML;
    currentnumber = currentnumber.replace(/%/g, "/100");
    currentnumber = currentnumber.replace(/x/g, "*");
    document.getElementById('display').innerHTML = eval(currentnumber);
    console.log(currentnumber)
}

