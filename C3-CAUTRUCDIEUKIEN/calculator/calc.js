function addition(){
    x = parseInt(document.getElementById("number1").value);
    y = parseInt(document.getElementById("number2").value);
    document.getElementById('result').innerHTML ="Result Addition: "+ (x + y);
}

function subtraction(){
    x = document.getElementById("number1").value;
    y = document.getElementById("number2").value;
    document.getElementById('result').innerHTML ="Result Subtraction: " + (x - y);
}

function multiplication(){
    x = document.getElementById("number1").value;
    y = document.getElementById("number2").value;
    document.getElementById('result').innerHTML ="Result Multiplication: "+ x * y;
}

function division(){
    x = document.getElementById("number1").value;
    y = document.getElementById("number2").value;
    document.getElementById('result').innerHTML ="Result Division: "+ x / y;
}