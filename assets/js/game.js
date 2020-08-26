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
    
    checkForMatch();
  }


function checkForMatch(){
    //cards match?
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    } else {
        unflipCards();
    }
}
        
function disableCards() {
    //matched
        firstCard.removeEventListener("click", flipcard);
        secondCard.removeEventListener("click", flipcard);

        resetBoard();
        }

function unflipCards() {
    //no match
    lockBoard = true

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        
        resetBoard();
        }, 1000);
}
        
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();



cards.forEach(card => card.addEventListener("click", flipcard));