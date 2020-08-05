var primaParola = prompt("Inserisci una parola");
var secondaParola = prompt("Inserisci una seconda parola");
var risultato = document.getElementById('risultato');

if (primaParola.length > secondaParola.length) {
  risultato.innerHTML=secondaParola+" "+primaParola;
} else if (secondaParola.length > primaParola.length) {
  risultato.innerHTML=primaParola+" "+secondaParola;
} else {
  risultato.innerHTML="Le due parole sono lunghe uguali";
}
