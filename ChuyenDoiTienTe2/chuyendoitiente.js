function converter(){
    let x = document.getElementById('inputnumber').value;
    let y = document.getElementById('fromCurrency').value;
    let z = document.getElementById('toCurrency').value;
    let inputvl = parseInt(x);
    
    if (y == "VND") {
        if (z == "VND") {
            document.getElementById("result").innerHTML = inputvl;
        } else {
            if (z == "USD") {
                document.getElementById("result").innerHTML = inputvl / 20000;
            } else document.getElementById("result").innerHTML = inputvl / 30000;
        }
    }

    if (y == "USD") {
        if (z == "VND") {
            document.getElementById("result").innerHTML = inputvl * 20000;
        } else {
            if (z == "USD") {
                document.getElementById("result").innerHTML = inputvl;
            } else {
                document.getElementById("result").innerHTML = inputvl * 2 / 3;
            }
            if (y == "EUR") {
                if (z == "VND") {
                    document.getElementById("result").innerHTML = inputvl * 30000;
                } else {
                    if (z == "USD") {
                        document.getElementById("result").innerHTML = inputvl * 3 / 2;
                    } else document.getElementById("result").innerHTML = inputvl ;


                }
            }
        }
    }
}

    
        

