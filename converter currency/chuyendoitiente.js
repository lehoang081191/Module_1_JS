// function option(){
//     if(document.getElementById('usd').value == "usd")  document.getElementById('usd').value =="vnd"{
//         usdTovnd(); 
//     }
//     else{
//         vndTousd();
//     }
// }
function usdTovnd(){
    x = document.getElementById('inputnumber').value;
    y = document.getElementById('usd').value;
    z = document.getElementById('vnd').value;
    document.getElementById("result").innerHTML ="Result: " + x * 23000 + z;
}

function vndTousd(){
    x = document.getElementById('inputnumber').value;
    y = document.getElementById('usd').value;
    z = document.getElementById('vnd').value;
    document.getElementById("result").innerHTML ="Result: " + x / 23000 + y;
}

