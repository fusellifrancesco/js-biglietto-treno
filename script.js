let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci quanti chilometri desideri percorrere");
const prezzoAlKm = 0.21;

let prezzoBiglietto = chilometri * prezzoAlKm;

let prezzoMinorenni = prezzoBiglietto * 20 / 100;
let prezzoOver65 = prezzoBiglietto * 40 / 100;


