let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci i chilometri che desideri percorrere");

const prezzoAlKm = 0.21;

let prezzoBigliettoIntero = chilometri * prezzoAlKm;

let prezzoUnder18 = prezzoBigliettoIntero - (prezzoBigliettoIntero * 0.20);
let prezzoOver65 = prezzoBigliettoIntero - (prezzoBigliettoIntero * 0.40);

let prezzoOver2Decimali = prezzoOver65.toFixed(2);
let prezzoUnder2Decimali = prezzoUnder18.toFixed(2)
let prezzoBigliettoInteroDecimale = prezzoBigliettoIntero.toFixed(2)

if (eta < 18){
    console.log(
        `
    --------- DETTAGLI BIGLIETTO ------------
        Nome: ${nome}
        Cognome: ${cognome}
        Età: ${eta}

    --------- KM DA PERCORRERE ------------
        KM: ${chilometri}

    ------ PREZZO BIGLIETTO ---------
        € ${prezzoUnder2Decimali}
    `
    );
} else if (eta >= 65){
    console.log(
        `
    --------- DETTAGLI BIGLIETTO ------------
        Nome: ${nome}
        Cognome: ${cognome}
        Età: ${eta}

    --------- KM DA PERCORRERE ------------
        KM: ${chilometri}

    ------ PREZZO BIGLIETTO ---------
        € ${prezzoOver2Decimali}
    `
    );
} else {
    console.log(
        `
    --------- DETTAGLI BIGLIETTO ------------
        Nome: ${nome}
        Cognome: ${cognome}
        Età: ${eta}

    --------- KM DA PERCORRERE ------------
        KM: ${chilometri}

    ------ PREZZO BIGLIETTO ---------
        € ${prezzoBigliettoInteroDecimale}
    `
    );
}
