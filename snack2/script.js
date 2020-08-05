// Richiesta della prima parola all'utente
var primaParola = prompt("Inserisci una parola");
// Richiesta della seconda parola all'utente
var secondaParola = prompt("Inserisci una seconda parola");
// Id dell'elemento in cui verrà stampato il risultato
var risultato = document.getElementById('risultato');
// Metodo 
if (primaParola.length > secondaParola.length) {
  risultato.innerHTML=secondaParola+" "+primaParola;
} else if (secondaParola.length > primaParola.length) {
  risultato.innerHTML=primaParola+" "+secondaParola;
} else {
  risultato.innerHTML="Le due parole sono lunghe uguali";
}
