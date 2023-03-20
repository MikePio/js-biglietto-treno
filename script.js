// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// - salvo in una varibile i dati del prompt che chiede Num. di kilometri da percorrere in treno
// - salvo in una varibile i dati del prompt che chiede l'età del passeggero in treno
// - (SOLO PER UN TEST) salvo in una varibile il prezzo del biglietto standard che è definito in base ai km (0.21 € al km) 
// - creo una condizione if dove salvo in una varibile uno sconto del 20% per i minorenni
// - creo una condizione else if dove salvo in una varibile uno sconto del 40% per gli over 65
// - creo una condizione else dove salvo in una varibile il prezzo del biglietto standard che è definito in base ai km (0.21 € al km)
// - genero l'output


const userKm = parseFloat(prompt('Inserisci il numero di kilometri (km) da percorrere:'));
const userAge = parseInt(prompt('Inserisci la tua età:'));

// Prezzo standard del biglietto 1km * 0.21€ (per ogni km 0.21€)
const userPrice = 0.21 * userKm;
// * OPPURE se non voglio dichiarare di nuovo userPrice nella condizione else posso dichiarare con la variabile let (*vedi in basso)
// * let userPrice = 0.21 * userKm;

console.log(userKm);
console.log(userAge);
console.log('Price standard', userPrice);
// per arrotondare a 2 cifre
console.log('Price standard', userPrice.toFixed(2));

// per mostare il messaggio nella pagina
const message = `
Il prezzo standard è: ${userPrice.toFixed(2)}€ 
`
document.getElementById('output-price-standard').innerHTML = message;


if(userAge < 18){ 
//oppure if(userAge <= 17){

  // prezzo con uno sconto 20% per i minorenni
  const priceKids = userPrice - (userPrice * .20);
  console.log('priceKids', priceKids);
  console.log('priceKids', priceKids.toFixed(2));

  const messageDescription = 'Lo sconto è: 20%';
  document.getElementById('output-description').innerHTML = messageDescription;

  const message = `
  Il prezzo scontato è: ${priceKids.toFixed(2)}€ 
  `
  document.getElementById('output').innerHTML = message;

}
else if (userAge >= 65) {
// else if (userAge > 64) {

  // prezzo con uno sconto del 40% per gli over 65
  const priceElderlyPeople = userPrice - (userPrice * .40);
  console.log('priceElderlyPeople', priceElderlyPeople);
  console.log('priceElderlyPeople', priceElderlyPeople.toFixed(2));

  const messageDescription = 'Lo sconto è: 40%';
  document.getElementById('output-description').innerHTML = messageDescription;

  const message = `
  Il prezzo scontato è: ${priceElderlyPeople.toFixed(2)}€ 
  `
  document.getElementById('output').innerHTML = message;

}
else{
  
  // Prezzo standard del biglietto 1km * 0.21€ (per ogni km 0.21€)
  const userPrice = 0.21 * userKm;
  // * Oppure se definisco con let al posto di const ad es. let userPrice = 0.21 * userKm; posso utilizzare
  // * userPrice = userPrice * 1;

  console.log('userPrice', userPrice);
  console.log('userPrice', userPrice.toFixed(2));

  const messageDescription = 'Non è presente uno sconto dedicato a te';
  document.getElementById('output-description').innerHTML = messageDescription;

  const message = `
  Il prezzo finale è: ${userPrice.toFixed(2)}€ 
  `
  document.getElementById('output').innerHTML = message;

}




























































