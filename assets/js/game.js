//card game logic
let flippedCard = false;
let firstCard, secondCard;
let gameLock = true;
let pairs = 6;
let clicks = 0;
let cards = Array.from(document.getElementsByClassName('card'));
cards.forEach(card => card.addEventListener('click', flipOver));
function flipOver() {
    console.log('Inside function');
    if (gameLock) return;
    if (this === firstCard) return;
    this.classList.add('visible');
    if (!flippedCard) {
        // The first click, card
        flippedCard = true;
        firstCard = this;
    } else {
        // The second click, card
        flippedCard = false;
        secondCard = this;
    }
}
      