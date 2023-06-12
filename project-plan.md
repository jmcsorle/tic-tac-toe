# Tic Tac Toe Project Plan
## Final Mod1 Project - Jan McSorley
### Iteration 0 (Complete by EOD 6/6/23)
1. Set up GitHub Repository as a private repository and share with project manager, [Kayla Gordon](https://github.com/kaylagordon).
2. Set up outline for README.md file
3. Create a pull request template and place it in the main branch of the project.
4. Create a project planning document and place it in the main branch of the project.
5. Outline high-level deliverables by iteration with target dates for completion.
6. Submit required project form.
### Iteration 1 (Complete by EOD 6/7/23)
1. Setup basic structure for: index.html, styles.css
2. Research CSS grid as a possible layout for the entire page and the game board - still having trouble with the game board portion of the site - can't figure out how to easily style the cells as a whole - I need to keep digging into grid resources in the next iteration.
3. Look at using buttons to activate and place tokens - Nope ... I originally thought this might be a good approach because screen reader users can navigate by button, but it would have been really complicated to implement this and it was not necessary with event bubbling and aria labels on the cells
### Iteration 2 (Complete by EOD 6/10/23)
1. Dig into grid research in CSS tricks and see if I can figure out how to style all of the cells more easily.
2. Complete basic CSS layout and basic HTML structure
3. Identify main components that will need to be built
4. Set up and define the data model including how to manage player information in an object: {id: one || two, game token: emoji, icon, or image, wins: 0 (changes, based on wins)}
5. pseudodode game logic and set up basic JS file, based on pseudocode
6. Set up basic querySelectors
7. Set up basic event listeners
8. Set up basic data model to support turn taking and win logic - for now, just focus on having 2 game characters - if you have time at the end, then you can try to add additional characters and a modal window.
9. Define iterattion 3
### Iteration 3 (Complete by EOD 6/11)
1. Work on game logic - reach out to rock to see if she can help me talk through this.
2. Complete functions for data model: creating players, tracking data on the game board, turn-taking (maybe use toggle?), winCondition function, function that determines a draw, function that resets for a new game (will need to research the timeout and how to have the board reset automatically - would prefer to have a new game button so that users can decide when to reset for accessibility purposes)
3. Outline Iteration 4
### Iteration 4
1. Update project plan document
2. Make sure base requirements are met for the project.
3. Upload new icon assets
4. Update CSS with new assets, work on media query (change h2 and h3 styles within the query) - research how to modify art assets through javascript once viewport reaches the minimum measurement set in the media query
4. research the addition of a modal window that loads at the page load.
5. Here's the pseudocode I did for the possible modal:
 - I would like the modal window to ask the following questions:
   - First Player will have characters in circles / Second Player will have chacters in squares - both will choose a character with "Choose a Troll":
   - Choose a troll - would like for there to be four options for circles and four options for squares - all have the same color, character and name, but they are just either positioned in a square or a circle:
     - Raucous Red
     - Blue Yaw
     - Pouty Pink
     - Grumpy Green
  - if the first player chooses a character, that character will not be available for Player 2, even though player 2's characters will all be in squares
  - based on the character chosen, a new gradient colored background should appear for that player and the medallion player image should also appear in either the left or right column.
  - Do you want the game to restart automatically after 5 seconds when it is finished, or do you want to restart the game when you're ready? This could be a drop down with "Restart Automatically," and "Let us restart when we are ready" or just a radio button group.
  - Once the players have made these selections, the modal should have a "Start Game" button.
  - I wonder if I should have a Game # of Match showing on the screen??????
  - NOTE - if the user chooses "restart automatically," I need to use the "timeout" javascript feature to restart the game after 5 seconds.It might be nice to have a modal appear that announces the winner and tells the user that a new game will start in 5 seconds and ask them if they want to start a new match with new players.
  - If the user chooses, restart the game themselves, then another modal needs to appear after the game. It should:
    - Announce the winner
    - Have a button that will restart the game witin the same match
    - allow them to start a new match with new players - if they choose this, then the startNewGame function should run and the