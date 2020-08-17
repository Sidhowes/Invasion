 $("#volume").click(function () {
        volumeOff();
    });

    function volumeOff() {
        $("#volume").addClass("hide-button");
        $("#mute").removeClass("hide-button");
        $("audio").prop("muted", true);
    }

    $("#mute").click(function () {
        volumeOn();
    });

    function volumeOn() {
        $("#volume").removeClass("hide-button");
        $("#mute").addClass("hide-button");
        $("audio").prop("muted", false);
    }

    class Invasion {
        constructor(totalTime, cards) {
            this.cardsArray = cards;
            this.totalTime = totalTime;
            this.timeRemaining = totalTime;
            this.timer = document.getElementById("time-remaining");
            this.ticker = document.getElementById("flips");
        }
        startGame() {
            this.cardToCheck = null;
            this.totalClicks = 0;
            this.timeRemaining = this.totalTime;
            this.matchedCards = [];
            this.busy = true;
        }
    }



    function ready() {
        let overlays = Array.from(document.getElementsByClassName("overlay-text"));
        let cards = Array.from(document.getElementsByClassName("card"));

        overlays.forEach(overlay => {
            overlay.addEventListener("click", () => {
                overlay.classList.remove("visible")
            });
        });
        cards.forEach(card => {
            card.addEventListener("click", () => {
                //game.flipcard
            });
        });


    }