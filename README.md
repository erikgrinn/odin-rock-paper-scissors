# odin-rock-paper-scissors

This project is a simple implementation of the classic game "Rock, Paper, Scissors" using HTML, CSS, and JavaScript. Below are the key coding concepts used in this project:

## HTML
- **Document Structure**: The HTML file defines the structure of the web page, including the head and body sections.
- **Elements and IDs**: Buttons for "Rock", "Paper", and "Scissors" are created with unique IDs to handle user interactions.
- **Divs for Layout**: Various div elements are used to organize the layout, including containers for buttons, players, and scores.

## CSS
- **Styling**: CSS is used to style the elements, including colors, fonts, and layout.
- **Flexbox**: Flexbox is used for layout management, making it easier to align and distribute space among items in a container.
- **Positioning**: Absolute and relative positioning are used to place elements precisely within their containers.
- **Media Queries**: Although not used in this project, the CSS file includes comments for potential media queries to handle different screen sizes.

## JavaScript
- **Event Handling**: Event listeners are added to buttons to handle user clicks and trigger the game logic.
- **DOM Manipulation**: JavaScript is used to manipulate the DOM, updating the scores and displaying the results of each round.
- **Functions**: Functions are defined to encapsulate the game logic, including getting the computer's choice, playing a round, and handling button clicks.
- **Conditional Statements**: Conditional statements are used to determine the outcome of each round and update the scores accordingly.
- **Randomization**: The `Math.random()` function is used to generate a random choice for the computer.
- **State Management**: Variables are used to keep track of the human and computer scores, and the game state is updated based on user interactions.

## How to Play
1. Open the `index.html` file in a web browser.
2. Click on one of the buttons ("Rock", "Paper", or "Scissors") to make your choice.
3. The computer will randomly select its choice, and the result of the round will be displayed.
4. The first to reach a score of 5 wins the match.
5. A "Try again?" button will appear to reset the game and play again.

Enjoy playing "Rock, Paper, Scissors" with JavaScript!