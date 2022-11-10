let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci quanti chilometri desideri percorrere");
const prezzoAlKm = 0.21;

let prezzoBiglietto = chilometri * prezzoAlKm;

let prezzoMinorenni = prezzoBiglietto * 0.20;
let prezzoOver65 = prezzoBiglietto * 0.40;

let prezzoOver2decimali = prezzoOver65.toFixed(2);
let prezzoMinorenni2Decimali = prezzoMinorenni.toFixed(2)
