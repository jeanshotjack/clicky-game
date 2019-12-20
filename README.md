# Tarot Memory Game

This is a memory game built using React. You can only click each card once. Clicking a card more than once will result in you losing the game. Once you have clicked a card, the order in which the cards appear in the grid will randomize. 

## Deployed 

Check out the game here: https://jeanshotjack.github.io/clicky-game/

## Style

The page is meant to imitate a golden threat tarot card. The cards are all spaced out evenly and the page is responsive for different screen sizes.

![Image of main page](/public/mainpage.png)


## How It Works

In a JSON file, we have all our cards which each have an id, a name, an image, and a "count" (whether or not it's been clicked):

![Image of cards JSON](/public/cards.png)

In the App.js file, the gameOver function compares the current score to the high score and sets the high score if the current score exceeds the high score. It then resets the "count" on all the cards to 0 (unclicked), resets the score, and sends an alert to notify the user that the game is over.

![Image of gameover](/public/gameover.png)

Also in the App.js file, the counter function handles what happens when each card is clicked. It finds the id of the card that was clicked, checks to see if the card has been clicked before and if it hasn't been clicked, it sets the "count" to 1 (clicked), adds a point to the score. It then randomly sorts the cards in either a positive or negative direction to make guessing the next card harder. 

![Image of counter](/public/counter.png)

In the card component, the counter function is set to run when the card is clicked. 

![Image of card](/public/cardcomp.png)