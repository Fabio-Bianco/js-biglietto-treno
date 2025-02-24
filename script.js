



//Chiedo all'utente i chilometri da percorrere e li salvo in una variabile (milesToGo);
const milesToGo = prompt ('Inserisci i chilometri di distanza che ti separano dalla tua destinazione');
console.log(milesToGo);

//Chiedo all'utente l'età e la salvo in una variabile (userAge);
const userAge = prompt ('Inserisci la tua Età');
console.log(userAge);

//Creo la variabile 'quantityMiles' che converte  la variabile 'milesToGo' da stringa a valore numerico;
let quantityMiles = 'milesToGo';
console.log(parseInt (milesToGo));

//Creo la variabile 'quantityAge' che converte  la variabile 'userAge' da stringa a valore numerico;
let quantityAge = 'userAge';
console.log(parseInt (userAge));

// Creo una variabile che indica il la tariffa per ognio KM percorso
const costForMiles = 0.21;
console.log (costForMiles);

// Calcolo il prezzo del biglietto in base ai chilometri da percorrere applicando una tariffa di 0,21 euro al Km;
let costForTicket = milesToGo*costForMiles;
console.log (milesToGo*costForMiles); 

// Applica lo sconto se necessario
if (quantityAge < 18) {
    ((costForTicket * 20)/100); // Sconto del 20%
} else if (quantityAge > 65) {
    ((costForTicket * 40)/100); // Sconto del 40%
}

// Formatta il prezzo con due decimali
costForTicket = costForTicket.toFixed(2);

// Mostra il risultato
alert(`Il prezzo totale del biglietto è: €${costForTicket}`);

    
















