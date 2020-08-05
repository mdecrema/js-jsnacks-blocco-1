// Richiesta di un numero all'utente
var numero = parseInt(prompt("Inserisci un numero"));
// ID dell'elemento in cui verrà stampato il risultato
var risultato = document.getElementById('risultato');
// Metodo
if (numero % 2 == 0) {
  risultato.innerHTML=numero;
} else {
  risultato.innerHTML=numero+1;
}
