// =======================
//      events
// =======================
// Was sind events in js ?
// Events werden in der regeln durch den user ausgelöst
// welchen haben wir bis jetzt kennengelernt ?
// onclick
// onchange
// onsubmit
// wie haben wir events bis jetzt vergeben ?
// über html, als attribute

// Heute neu --> Events über JavaScript mit dem EventListener <3
// element.addEventListener('event', callback function);

const btnUp1 = document.body.querySelector('button:nth-of-type(1)');
const btnUp2 = document.body.querySelector('button:nth-of-type(2)');
let counter1 = 0;
let counter2 = 0;

// wann schreibe ich das so ? --> immer, wenn ich meine callback function mehrfach im code benötige
const countUp = () => {
    counter1++; //zählt immer einen hoch
    console.log(counter1);
}

btnUp1.addEventListener('click', countUp);

// callback function direkt im EventListener definieren
// wann schreibe ich das so --> immer, wenn ich meine callback nur für diesen einen EventListener benötige
btnUp2.addEventListener('click', () => {
    counter2++;
    console.log(counter2);
})

// Events werden in verschiedene kategorien eingeteilt
// mouse events
// keyboard events
// loading events
// form events
// timing events
// einfach nur ein paar beispiele für events

// events general --> event object
// NICE TO KNOW --> kennen nicht wissen --> kommen wir nochmal zu
// document.body.addEventListener('click', (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.type);
// })

// mouse events
document.body.addEventListener('mouseover', () => {
    // document.body.style.backgroundColor = "green";
})

document.body.addEventListener('mouseout', () => {
    // document.body.style.backgroundColor = "white";
})

document.body.addEventListener('mousemove', (event) => {
    // console.log(event.clientX)
    // console.log(event.clientY)
    // console.log("maus bewegt");
})

// keyboard
// keydown, keypress, keyup
const inputField = document.body.querySelector('form input');

// ausgelöst wenn die taste gedrückt wird und wird solange ausgeführt wie die taste gedrückt
inputField.addEventListener('keydown', (event) => {
    // console.log(event.key); //können wir uns anzeigen lassen, welche taste gedrückt worden ist
    // console.log(event.keyCode);
    // if (event.keyCode === 88) {
    //     console.log("du hast ein x oder X gedrückt");
    // }
    // console.log(event.key)
})

// ausgelöst wenn die taste losgelassen wird
inputField.addEventListener('keyup', (event) => {
    // console.log(event.key);
    // console.log(event.keyCode); //nimmt sich jedes mal bei auslösen des events den inhalt
})

// wird nur einmal ausgeführt beim tastendruck und shift zb wird nicht genommen
inputField.addEventListener('keypress', (event) => {
    // console.log(event.key);
    console.log(event.key); //nimmt sich jedes mal bei auslösen des events den inhalt
})

// focusin und focusout event
// wahrscheinlich genutzt von amazon
inputField.addEventListener('focusin', () => {
    document.body.style.backgroundColor = "red";
})

inputField.addEventListener('focusout', () => {
    document.body.style.backgroundColor = "white";
})