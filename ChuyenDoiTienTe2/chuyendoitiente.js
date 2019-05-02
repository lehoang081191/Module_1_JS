function converter(){
    let x = document.getElementById('inputnumber').value;
    let y = document.getElementById('fromCurrency').value;
    let z = document.getElementById('toCurrency').value;
    let inputvl = parseInt(x);
    
    function converter(){
        let x = document.getElementById('inputnumber').value;
        let y = document.getElementById('fromCurrency').value;
        let z = document.getElementById('toCurrency').value;
        let inputvl = parseInt(x);
        
        if (y == "vnd"){
            if ( z == "vnd"){
                document.getElementById('result').innerHTML = inputvl;
            }
            else if(z == "usd"){
                document.getElementById('result').innerHTML = inputvl /23000;
            }else{
                document.getElementById('result').innerHTML = inputvl /26000;
            }
        }else if(y == "usd"){
            if (z == "usd"){
                document.getElementById('result').innerHTML = inputvl;
            }
            else if (z == "vnd"){
                document.getElementById('result').innerHTML = inputvl * 23000;
            }else{
                document.getElementById('result').innerHTML = inputvl * (23000/26000);
            }
        }else{
            if (z == "eur"){
                document.getElementById('result').innerHTML = inputvl;
            }else if(z == "usd"){
                document.getElementById('result').innerHTML = inputvl * (26000/23000);
            }else{
                document.getElementById('result').innerHTML = inputvl * 26000;
            }
        }
    
        
            
    
    

    
        

