
let gameBoard = document.getElementById("gameBoard");
let result = document.getElementById("result");

let cards = [

    "🍎", "🍎",

    "🍌", "🍌",

    "🍇", "🍇",

    "🍒", "🍒"

];


// shuffle cards
cards.sort(function () {
    return 0.5 - Math.random();

});


// variables
let firstCard = null;

let secondCard = null;

let lockBoard = false;

let matchedPairs = 0;


// create cards dynamically
cards.forEach(function (emoji) {

    // create button
    let card = document.createElement("button");


    // hidden initially
    card.innerText = "?";


    // storing emoji using dataset
    card.dataset.emoji = emoji;
  // dataset is used to store custom data inside an HTML element.

    // append to board
    gameBoard.appendChild(card);


    // card click event
    card.addEventListener("click", function () {

        // prevent extra clicks
        if (
            lockBoard ||
            card === firstCard ||
            card.innerText !== "?"
        ) {
            return;
        }


        // show emoji
        card.innerText = card.dataset.emoji;


        // first card selection
        if (firstCard === null) {

            firstCard = card;

        }

        else {

            secondCard = card;

            lockBoard = true;


            // check match
            if (
                firstCard.dataset.emoji ===
                secondCard.dataset.emoji
            ) {

                matchedPairs++;


                // reset selections
                firstCard = null;

                secondCard = null;

                lockBoard = false;


                // game completed
                if (matchedPairs === cards.length / 2) {

                    result.innerText =
                        "🎉 You matched all pairs!";

                }

            }

            else {

                // hide cards again after 1 second
                setTimeout(function () {

                    firstCard.innerText = "?";

                    secondCard.innerText = "?";


                    // reset selections
                    firstCard = null;

                    secondCard = null;

                    lockBoard = false;

                }, 1000);

            }

        }

    });

});