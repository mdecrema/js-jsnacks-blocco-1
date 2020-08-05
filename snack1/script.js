var primoNumero = parseInt(prompt("Inserisci un numero"));
var secondoNumero = parseInt(prompt("Inserisci un altro numero"));
var risultato = document.getElementById('risultato');

if (primoNumero > secondoNumero) {
  risultato.innerHTML=primoNumero;
} else if (secondoNumero > primoNumero) {
  risultato.innerHTML=secondoNumero;
}
