# Esercizio: Biglietto del treno

#### Sviluppo di un programma che calcoli il prezzo totale di un biglietto del treno tenendo conto che :

- il prezzo del biglietto è definito in base ai km (0.21 € al km);
- ai minorenni viene applicato uno sconto del 20%;
- agli over 65 viene applicato uno sconto del 40%

#### Svolgimento:

- Chiedo all'utente i chilometri da percorrere e li salvo in una variabile;
- Chiedo all'utente l'età e la salvo in una variabile;
- Trasformo la variabile 'chilometri da percorrere' da stringa in numero;
- Trasformo la variabile 'età dell'utente' da stringa in numero;
- Creo una variabile (const) che indica la tariffa al KM;
- Calcolo il prezzo del biglietto in base ai chilometri da percorrere applicando una  tariffa di 0,21 euro al Km;
- SE l'utente è minorenne: 
    - viene applicato uno sconto del 20%;
- SE l'untente è over 65:
    - viene applicato unos sconto del 40%;
- ALTRIMENTI SE non è minorenne e non è over 65:
    -  viena applicata la tariffa base


