let FIRST_STAR_THRESHOLD = 5;
let SECOND_STAR_THRESHOLD = 10;
let MAX_MATCHING = 8;

var GameState = function(maxMatching) {
    this.successCount = 0;
    this.trialCount = 0;
    this.selectedCards = [];
}

GameState.prototype.increaseMove = function() {
    this.trialCount += 1;
    $('.moves').text(this.trialCount);
    
    if (this.trialCount == FIRST_STAR_THRESHOLD) {
        $('.fa-star:nth-child(0)').addClass('fa-star-o');
    }
    else if (this.trialCount == SECOND_STAR_THRESHOLD) {
        $('.fa-star:nth-child(1)').addClass('fa-star-o');
    }
}

var gameState = new GameState(8);

$(function() {
    init();

    // when restart button is clicked, re-initialize the card list.
    $('.restart').click(function() {
        init();
    });
});

/*
    Initialize array of cards in newly shuffled order.
    - obtain current list of cards, and shuffle them
    - remove current elements under the class 'deck' which holds the list of cards
    - reassign (append) shuffled list of cards into the 'deck' class.
*/
function init() {
    const cards = shuffle($('.card i'));

    $('.card').removeClass("match open show");
    $('.deck').empty();

    for (const card of cards) {
        let newCardWrapper = $('<li></li>');
        newCardWrapper.addClass('card');
        newCardWrapper.append(card);

        $('.deck').append(newCardWrapper);
    }
    
    $('.card').click(whenCardClicked);
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function whenCardClicked(event) {
    $(this).addClass("open show");
    gameState.selectedCards.push($(this).find(".fa"));

    if (gameState.selectedCards.length == 2) {
        $('.card').unbind("click", whenCardClicked);
    }

    setTimeout(function(){
        if (gameState.selectedCards.length == 2) {
            gameState.increaseMove();

            const firstCard = gameState.selectedCards.pop();
            const secondCard = gameState.selectedCards.pop();
    
            const firstCardSymbol = firstCard.attr('class').split(" ")[1];
            const secondCardSymbol = secondCard.attr('class').split(" ")[1];
            // alert('first: ' + $(firstCard).attr('class').split(" ")[1] + ', second: ' + $(secondCard).attr('class').split(" ")[1]);
    
            firstCard.parent().removeClass("open show");
            secondCard.parent().removeClass("open show");
    
            if (firstCardSymbol === secondCardSymbol) { 
                firstCard.parent().addClass("match");
                secondCard.parent().addClass("match");

                if (gameState.successCount == MAX_MATCHING) {
                    alert("Congratulation!!");
                }
            }
            
            $('.card').click(whenCardClicked);
        }
    }, 1000);
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
