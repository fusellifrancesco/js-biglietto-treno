let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci quanti chilometri desideri percorrere");
const prezzoAlKm = 0.21;

let prezzoBigliettoIntero = chilometri * prezzoAlKm;

let prezzoUnder18 = prezzoBigliettoIntero - (prezzoBigliettoIntero * 0.20);
let prezzoOver65 = prezzoBigliettoIntero - (prezzoBigliettoIntero * 0.40);

let prezzoOver2decimali = prezzoOver65.toFixed(2);
let prezzoUnder2Decimali = prezzoUnder18.toFixed(2)

if (eta < 18){
    console.log(prezzoUnder2Decimali);
} else if (eta >= 65){
    console.log(prezzoOver2decimali);
} else {
    console.log(prezzoBigliettoIntero)
}