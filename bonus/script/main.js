// Inserimento chilometraggio
console.log('principi.js loaded');

let distanza;
// verifica
do {
    distanza = parseInt(prompt('Quanti chilometri devi percorrere?'));
} while (isNaN(distanza)){   
};

document.getElementById('chilometraggio').innerHTML = distanza + ' ' + 'Km';

// inserimento eta utente
let user_age;
// verifica
do {
    user_age = parseInt(prompt('Quanti anni hai?'));
} while (isNaN(user_age)){   
};

document.getElementById('eta').innerHTML = user_age

// elaborazione del prezzo
let prezzo = distanza * 0.21
console.log(prezzo)

// elaborazione sconto da applicare
if (user_age < 18) {
    let sconto_20 = prezzo * 0.8;
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' ' + '€';
    document.getElementById('prezzo_20').innerHTML = sconto_20.toFixed(2) + ' '  + '€';
    document.getElementById('sconto').innerHTML = '20%';
    document.getElementById('applicazione_sconto').innerHTML = 'Sconto Under18:';
} else if (user_age > 65) {
    let sconto_40 = prezzo * 0.6;
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' ' + '€';
    document.getElementById('prezzo_40').innerHTML = sconto_40.toFixed(2) + ' '  + '€';
    document.getElementById('sconto').innerHTML = '40%';
    document.getElementById('applicazione_sconto').innerHTML = 'Sconto Over65:';
} else{
    document.getElementById('prezzo_normale').innerHTML = prezzo.toFixed(2) + ' ' + '€';
}