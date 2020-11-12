// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var numbers = [Math.floor(Math.random() * 7), Math.floor(Math.random() * 7)]
console.log(numbers);
var message = "";
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);

  if (numbers[0] > numbers[1]) {
    console.log(message = "il vincitore è l'utente");
  } else if (numbers[0] < numbers[1]) {
    console.log(message = "il vincitore è il pc");
  }
  else {
    console.log(message = "pareggio");
  }
}
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
