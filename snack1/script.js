// Richiesta di un numero all'utente
var primoNumero = parseInt(prompt("Inserisci un numero"));
// Richiesta di un secondo numero all'utente
var secondoNumero = parseInt(prompt("Inserisci un altro numero"));
// ID dell'elemento in cui verrà stampato il risultato
var risultato = document.getElementById('risultato');
// Metodo
if (!isNaN(primoNumero) && !isNaN(secondoNumero)) {
if (primoNumero > secondoNumero) {
  risultato.innerHTML=primoNumero;
} else if (secondoNumero > primoNumero) {
  risultato.innerHTML=secondoNumero;
} else {
  risultato.innerHTML="I due numeri sono uguali";
}
} else {
  alert('Errore! Devi inserire un valore numerico');
}
