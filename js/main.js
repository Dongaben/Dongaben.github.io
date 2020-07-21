function login() {
    
    let loginInput = document.querySelector("input[name='login-input']");
    
    if (loginInput.value == "Szabó Krisztina Dóra") {
        alert("Szia Titti!");
        ablak = open("Titti.html")    
    } 
   
    else if (loginInput.value == "Szabo Krisztina Dora") {
        alert("Szia Titti!");
        ablak = open("Titti.html")
    } 

    else if (loginInput.value != "Szabó Krisztina Dóra") {
        alert("Nem ismerlek, viszlát!");
    }
}

function bezárás() {
    ablak = close("Titti.html");
}