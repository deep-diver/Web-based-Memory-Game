let trialCount = 0;

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
    const cards = shuffle($('.deck li i'));

    $('.deck li').removeClass("match open show");
    $('.deck').empty();

    for (const card of cards) {
        let newCardWrapper = $('<li></li>');
        newCardWrapper.addClass('card');
        newCardWrapper.append(card);

        $('.deck').append(newCardWrapper);
    }
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
