// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var numbers = [Math.floor(Math.random() * 7), Math.floor(Math.random() * 7)]
console.log(numbers);
var message = "";
var userNumber = numbers[0]
console.log(userNumber);
var pcNumber = numbers[1]
console.log(pcNumber);
if (userNumber > pcNumber) {
  console.log("user vince");
} else if (userNumber < pcNumber) {
  console.log("pc vince");
}
else {
  console.log("pareggio");
}


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
