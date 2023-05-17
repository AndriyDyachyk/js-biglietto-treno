// Inserimento chilometraggio
console.log('principi.js loaded');

let distanza = prompt('Quanti chilometri devi percorrere?');
console.log(distanza);

document.getElementById('chilometraggio').innerHTML = distanza

// inserimento eta utente
let user_age = prompt('Quanti anni hai?');
console.log(parseInt(user_age));

document.getElementById('eta').innerHTML = user_age


// elaborazione del prezzo
let prezzo = distanza * 0.21
console.log(prezzo)


// elaborazione sconto da applicare
if (user_age < 18) {
    let sconto_20 = prezzo * 0.8;
    document.getElementById('prezzo').innerHTML = sconto_20.toFixed(2);
    document.getElementById('sconto').innerHTML = 'Sconto applicato:' + ' ' + '20%';
} else if (18 < user_age < 65) {
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2);
} else {
    let sconto_40 = prezzo * 0.6;
    document.getElementById('prezzo').innerHTML = sconto_40.toFixed(2);
    document.getElementById('sconto').innerHTML = 'Sconto applicato:' + ' ' + '40%';
}