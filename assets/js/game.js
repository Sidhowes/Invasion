
$(".visible").click(function(){
    $(".visible").removeClass("visible");
})


const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time-remaining").innerHTML = "Finished";
  } else {
    document.getElementById("time-remaining").innerHTML = timeleft + "s";
  }
  timeleft -= 1;
}, 1000);



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

