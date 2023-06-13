# Tic Tac Toe

## Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
I built a tic tac toe game using JavaScript, CSS, and HTML. The game has a troll theme with two players: Raucous Red and Blue Yaw. Raucas Red gameboard symbols are both red and in the shape of a circle and Blue Yaw gameboard symbols are both blue and in the shape of a square. This is to support the [Success Criteria 1.4.1 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/#use-of-color) of the Web Content Accessibility Guidelines that states "Color is not used as the only visual means of conveying information, indicating and action, prompting a response, or distinguishing a visual element."

The game is not keyboard accessible, which violates [WCAG Success Criteria, 2.1 - Make all functionality available from a keyboard](https://www.w3.org/TR/WCAG21/#keyboard-accessible). I had hoped to get to a place in the project where I could add a skip to gameboard link and work on making the gameboard keyboard accessilbe, but just meeting the base requirements of the project took more time than I had hoped.

When the page loads, or is refreshed, a new match is started, the data model is set to default settings and the game board does not have any tokens.

## Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

At this point, the game is a private game on github and you have to have the link to access it: https://github.com/jmcsorle/tic-tac-toe.

Once you load the repository in your brower, the upper right portion of the GitHub interface contains a "Fork button: <img width="1390" alt="image" src="https://user-images.githubusercontent.com/7227063/245514733-1144a3c1-803c-417c-8e80-42a5625a9ef1.png">

Choose the fork button and follow the steps to fork the repository. Once the repository is forked, you will need to clone the repository to your machine by choosing the green "Code" button: <img width="403" alt="image" src="https://user-images.githubusercontent.com/7227063/245516498-945366b2-0b89-4529-92e0-60b722c29fcf.png">

## Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)
I sort of "ish" got the application to convert to one column for smaller viewports. It's not where it should be, but it's kind of functional: 
![image](https://user-images.githubusercontent.com/7227063/245553557-dfb2b132-a9ec-4f72-9968-64a9304d3379.png)

Here is a screen shot of the application in full screen mode:

<img width="1402" alt="image" src="https://user-images.githubusercontent.com/7227063/245554638-8b01e204-d116-424e-ae15-0e7d5fb2a9c6.png">

## Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

## Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

## Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

The learning goals for this project asre to endure that I am able to demonstrate an understand and independently demonstrate the following
 - DRY JavaScript: my code is not repetitive, which makes it easier to read and test
 - The ability to implement event listeners and use event handlers to delegate actions from targets to the most logical parent element (e.g. utilize event delegation to handle similar event listeners)
 - Demonstrate an understanding of the differences between the data model and how the data is displayed on the DOM
 - Use for loops to iterate through DOM elements
 - Use a problem solving process to break down large problems:
   - solve things step-by-step
   - use console.log to troubleshoot
   - use research resources through Mozilla Developer Network, W3Schools, and other resources utilized during Mod1

## Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
### CSS Grid and Responsive Design
To set up the basic structure for the page, I reviewed a YouTub video titled, [Responsive CSS Grid Tutorial by Angela Design](https://www.youtube.com/watch?v=68O6eOGAGqA) and followed her instructions to set up the main grid and make the design responsive.

I then reviewed another resource titled, [Create a Nested Grid](https://www.quackit.com/css/grid/tutorial/create_a_nested_grid.cfm#:~:text=Grid%20items%20can%20become%20grids,and%20it%20becomes%20a%20grid.) about nesting grids within grids so that I could create the Tic Tac Toe grid inside of the .game-board grid area. I wanted to put a separate grid in this area so that when it reflowed, the game-board would remain intact.
