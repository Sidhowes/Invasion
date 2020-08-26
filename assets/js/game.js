const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
      //first click
      hasFlippedCard = true;
      firstCard = this;

      return;
  }

    //second click
    secondCard = this;
    
    



cards.forEach(card => card.addEventListener("click", flipcard));