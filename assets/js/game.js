(function () {
  var timeContainer = document.getElementById("timer-value");
  var startButton = document.getElementById("start-game");
  var timer = 0;
  var maxTime = 30;
  var timeout = null;
  function count () {
    timeout = setTimeout(function () {
      if (timer < maxTime) {
        timer++;
        timeContainer.innerText = timer;
        count();
      }
      else {
        alert("Time's up!");
        startButton.style.display = "inline-block";
      }
    }, 1000);
  }
  function endGame () {
    clearTimeout(timeout);
    startButton.style.display = "inline-block";
    alert("You completed the game in time!");
  }
  function startGame () {
    if (timeout) { clearTimeout(timeout); }
    timer = 0;
    timeContainer.innerText = timer;
    this.style.display = "none";
    count();
  }
  document.getElementById("start-game").addEventListener("click", startGame);
  document.getElementById("end-game").addEventListener("click", endGame);
})();










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
        match();
    } else {
        flipBack();
    }
}
        
function match() {
    //matched
        firstCard.removeEventListener("click", flipcard);
        firstCard.classList.add("spin");
        secondCard.removeEventListener("click", flipcard);
        secondCard.classList.add("spin");
        

        resetBoard();
        }

function flipBack() {
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