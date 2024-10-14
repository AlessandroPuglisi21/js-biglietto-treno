//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// PREZZO PER KM
const pricePerkm = 0.21;

// RICHIESTA ETÀ
const userAge = prompt('Inserisci la tua età');
console.log(`Età: ${userAge}`);

// CHILOMETRI DA PERCORRERE
const kmTodo = prompt('Inserisci i Km che devi percorrere');
console.log(`Km: ${kmTodo}`);

// CALCOLO DEL PREZZO BIGLIETTO INTERO
let fullPrice = pricePerkm * kmTodo;
console.log(`Prezzo base: € ${fullPrice.toFixed(2)}`);

// VARIABILE PER LO SCONTO
let discount = 0;

// APPLICAZIONE DELLO SCONTO IN BASE ALL'ETÀ
if (userAge < 18) {
    // Sconto del 20% per i minorenni
    discount = fullPrice * 0.20;
    console.log(`Sconto del 20%: € ${discount.toFixed(2)}`);
} else if (userAge >= 65) {
    // Sconto del 40% per gli over 65
    discount = fullPrice * 0.40;
    console.log(`Sconto del 40%: € ${discount.toFixed(2)}`);
}

// CALCOLO DEL PREZZO FINALE
const totalPrice = fullPrice - discount;

// STAMPA DEL PREZZO TOTALE
console.log(`Prezzo totale: € ${totalPrice.toFixed(2)}`);