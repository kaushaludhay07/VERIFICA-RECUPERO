function calcolaPrezzo() {

    var eta = document.getElementById("eta").value; 
    var giorno = document.getElementById("giorno").value;
    var prezzo = 10;

    if (eta < 10 || eta > 65) {
        prezzo = 5;
    }

    if (giorno == "Mercoledi") {
        prezzo = prezzo - 2;
    }
         
    var risultato = document.getElementById("risultato");
    risultato.innerHTML = "Prezzo finale: " + prezzo + "€";

    if (prezzo < 6) {
        risultato.style.color = "green";
    } else {
        risultato.style.color = "black";
    }
}
function applicaCodice() {

    var codiceInput = document.getElementById("codice");
    var codice = codiceInput.value;
    var messaggio = document.getElementById("messaggioPromo");

    messaggio.innerHTML = "";
    messaggio.style.color = "black";
    messaggio.style.backgroundColor = "white";
    codiceInput.style.borderColor = "black";

    if (codice == "") {
        codiceInput.style.borderColor = "red";
    }
    else if (codice == "POPCORN") {
        messaggio.innerHTML = "Hai diritto a Popcorn Gratis!";
        messaggio.style.backgroundColor = "yellow";
    }
    else {
        messaggio.innerHTML = "Codice non valido";
        messaggio.style.color = "red";
    }
}

