//BONUS


const listTitle = [
    'QUESTO E\' IL PRIMO ALIMENTO',
    'QUESTO E\' IL SECONDO ALIMENTO',
    'QUESTO E\' IL TERZO ALIMENTO'
];
const listContent = [
    'Questo testo fa riferimento al Burro di Arachidi',
    'Questo testo fa riferimento alla Farina di Avena',
    'Questo testo fa riferimento alle Proteine in Polvere',
];
const listFood = [
    './img/burro.jpg',
    './img/avena.jpg',
    './img/proteine.png'
];

let currentIndex = 0;


//dichiaro le costanti
const titleElement = document.querySelector(".content-box .title");
const paragraphElement = document.querySelector(".content-box .content-paragraph");
const imageElement = document.querySelector(".news .content-image img");
const buttonPrevious = document.querySelector(".button-previous .fas.fa-arrow-left");
const buttonNext = document.querySelector(".button-next .fas.fa-arrow-right");

//scrivi nell'html l'argomento 0 dell'array
titleElement.innerHTML = listTitle[currentIndex];
paragraphElement.innerHTML = listContent[currentIndex];
imageElement.src = listFood[currentIndex];

//se clicco la freccia avanti, incrementa di 1 l'indice e passa a quello successivo
//quando arriva alla fine degli elementi, torna al prima argomento della lista
buttonNext.addEventListener('click', function(){
    currentIndex++;
    if ((currentIndex > listTitle.length - 1) && (currentIndex > listContent.length - 1)) {
        currentIndex = 0;
    }
    titleElement.innerHTML = listTitle[currentIndex];
    paragraphElement.innerHTML = listContent[currentIndex];
    imageElement.src = listFood[currentIndex];
})

//se clicco freccia indietro, decrementa di 1 l'indice
//se si trova in prima posizione, allora vai alla fine della lista e prendi
//l'ultimo argomento dell'array
buttonPrevious.addEventListener('click', function(){
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = listTitle.length - 1;
        currentIndex = listContent.length - 1;
    }
    titleElement.innerHTML = listTitle[currentIndex];
    paragraphElement.innerHTML = listContent[currentIndex];
    imageElement.src = listFood[currentIndex];
})