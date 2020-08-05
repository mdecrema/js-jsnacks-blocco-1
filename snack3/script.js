var numero = parseInt(prompt("Inserisci un numero"));
var risultato = document.getElementById('risultato');

if (numero % 2 == 0) {
  risultato.innerHTML=numero;
} else {
  risultato.innerHTML=numero+1;
}
