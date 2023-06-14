# Tic Tac Toe

## Abstract:

I built a tic tac toe game using JavaScript, CSS, and HTML. The game has a troll theme with two players: Raucous Red and Blue Yaw. Raucas Red gameboard symbols are both red and in the shape of a circle and Blue Yaw gameboard symbols are both blue and in the shape of a square. This is to support the [Success Criteria 1.4.1 of the Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/#use-of-color) of the Web Content Accessibility Guidelines that states "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element."

The game is not keyboard accessible, which violates [WCAG Success Criteria, 2.1 - Make all functionality available from a keyboard](https://www.w3.org/TR/WCAG21/#keyboard-accessible). I had hoped to get to a place in the project where I could add a skip to gameboard link and work on making the gameboard keyboard accessilbe, but just meeting the base requirements of the project took more time than I had hoped.

When the page loads, or is refreshed, a new match is started, the data model is set to default settings and the game board is cleared.

## Installation Instructions:

Once you load the [repository](https://github.com/jmcsorle/tic-tac-toe) in your brower, the upper right portion of the GitHub interface contains a "Fork button: <img width="1390" alt="image" src="https://user-images.githubusercontent.com/7227063/245514733-1144a3c1-803c-417c-8e80-42a5625a9ef1.png">

Choose the fork button and follow the steps to fork the repository. Once the repository is forked, you will need to clone the repository to your machine by choosing the green "Code" button: <img width="403" alt="image" src="https://user-images.githubusercontent.com/7227063/245516498-945366b2-0b89-4529-92e0-60b722c29fcf.png">

## Preview of App:
I added a media query to the CSS to convert to one column for smaller viewports. It's not where it should be, but it's functional. I am looking forward to learning more about media queries and getting better at them. 

<img width="300" src="https://user-images.githubusercontent.com/7227063/245595765-87a34647-194f-4e76-a732-3fdfcb56abe7.png" />

Here is a screen shot of the application in full screen mode:

<img width="1402" alt="image" src="https://user-images.githubusercontent.com/7227063/245554638-8b01e204-d116-424e-ae15-0e7d5fb2a9c6.png">

## Context:
I am starting week 6 of Module 1 in Turing. I have completed Module 0, which was 3 weeks long for people who are working part time. The Tic Tac Toe project was assigned on June 6, 2023 and was due on June 13, 2023.

In total, I spent about 61 hours on this project. I spent a lot of time in unproductive struggle as I tried to figure out how to approach the JavaScript. I did a lot of narrative pseudocoding, which was somewhat helpful, but actually contributed to me feeling overwhelmed by everthing I needed to do. I definitely want to learn how to use a project management tool so that I can keep the steps more organized and in bullet points.

My rock was very helpful in advising me on how to break things down into smaller chunks. She explained her problem-solving technique and told me how she approaches large projects. This was very helpful. She also told me that everyone makes mistakes when they code and that is why you just go step-by-step. Her advice to slow down really helped me. I also found study hall to be helpful. Just talking through different approaches to how to work through bugs was very helpful ... and seeing that we were all in the same boat made me feel less stressed. Even though I am an introvert by nature, I am going to spend a lot more time in study hall moving forward.

## Contributors:

Jan McSorley: [GitHub](https://github.com/jmcsorle);

## Learning Goals:

The learning goals for this project were to ensure that I am able to demonstrate, understand, and independently demonstrate the following:
 - DRY JavaScript: my code is not repetitive, which makes it easier to read and test
 - The ability to implement event listeners and use event handlers to delegate actions from targets to the most logical parent element (e.g. utilize event delegation to handle similar event listeners)
 - Demonstrate an understanding of the differences between the data model and how the data is displayed on the DOM
 - Use for loops to iterate through DOM elements
 - Use a problem solving process to break down large problems:
   - solve things step-by-step
   - use console.log to troubleshoot
   - use research resources through Mozilla Developer Network, W3Schools, and other resources utilized during Mod1

The tech I used to build this project was:
 - Macintosh Terminal
 - VS Code
 - HTML
 - CSS
 - JavaScript
 - Markdown
 - Chrome Browser (Version 113.0.5672.126 (Official Build) (arm64))
 - Chrome Developer Tools (Dev Tools)

## Wins + Challenges:

### Breaking the project down into smaller chunks so that I could start on the JavaScript file was my biggest and most daunting challenge:

Until I got to this project, I did not realize the effect the paired project work delegation would have on my ability to independently approach something like this. 

Coming into this project, I was very shaky on event listeners and event delegation. I had to spend a lot of time rereading previous lessons and looking at code from previous projects to even get started. My confidence was definitely impacted by this, which made the project even more difficult. Personally, it would have helped me to have a paired project with someone in a different module, where their job was simply to coach and guide and my job was to do the actual coding. Having to actually be the person typing and testing is what makes this stuff stick.

Ultimately, I am grateful for this project. Even though it is not perfect, I learned a lot.

### CSS Grid and Responsive Design - both a challenge and a win:

To set up the basic structure for the page, I reviewed a YouTub video titled, [Responsive CSS Grid Tutorial by Angela Design](https://www.youtube.com/watch?v=68O6eOGAGqA) and followed her instructions to set up the main grid and make the design responsive.

I then reviewed another resource titled, [Create a Nested Grid](https://www.quackit.com/css/grid/tutorial/create_a_nested_grid.cfm#:~:text=Grid%20items%20can%20become%20grids,and%20it%20becomes%20a%20grid.) about nesting grids within grids so that I could create the Tic Tac Toe grid inside of the .game-board grid area. I wanted to put a separate grid in this area so that when it reflowed, the game-board would remain intact.

I really struggled with how to get the tic-tac-toe grid to not look like a box. I finally figured out that I needed to create a separate class for all of the cell areas and when I did that, I was able to more easily adjust the borders. I played with grid gap and some other things, but eventually landed on just using borders and removing the sides that were not needed.

### Order of Operations and stopping the event listener - both a challenge and a win:

I probably spent 3 hours trying to figure out why moving a nested if statement to a new function was not working. It ended up that I was calling the wrong function first with the event listener. Also, I was getting a type error if a game had been won and the user still clicked on cells. I learned a tip in study hall to just add a global variable that would be changed when a win condition was true and then I could use that variable to stop the event listener with a conditional statement. It was a simple, but effective solution.

### The setTimout() method:

I was not a fan of having to implement this because automatically changing the DOM without user control, can violate several success criteria under [WCAG 2.2](https://www.w3.org/TR/WCAG21/#enough-time), but I am grateful that I learned about it and am also grateful for what I learned during office hours. I wanted two functions to be delayed and Kayla suggested that I put both of those functions into a separate function. It worked beautifully and now I feel like I have a much better understanding of this method ... even though the MDN document is still a bit over my head in terms of its explanation.
