# svg-logo-maker

*Note*: There is no starter code for this assignment.

## User Story

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Creation process

First step was making the remote repo and then cloning that to my local device. From there, I established my file structure to be alike that of which the class provided. With structure established, it was time to copy provided snippets and the user story/acceptance criteria. Later on, I did add more to the structure and also a generateSVG file for the sake of handling the making of a svg file based on the data gathered from user inputs.
<br/>
<br/>
I realized early on that this project was much like the readme generator assignment. With that, I knew I could copy some snippets of code and edit them to befit this assignment. 
<br/> <br/>
I also gained inspiration from the following video and links: 
<br/> <br/>
https://youtu.be/GJYMcLus3v0?si=FVBjnHC9ST-bKgHU
<br/> <br/>
https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js
<br/> <br/>
https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/lib/shapes.test.js
<br/> <br/>
https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/lib/shapes.js

## Challenges 

The main challenge I encountered during this project was the writing of the tests. We spent only a day on that subject in class and with the minimal exposure and time to practice, I found myself relying heavily on examples. I found a great video to watch that covered this exact topic (listed above) and that really helped break down the blockages so I could move forward expediently. 

## Github/contact info

Account: https://github.com/shyanrafer
<br/> <br/>
REPO: https://github.com/shyanrafer/svg-logo-maker
<br/> <br/>
Email: ryanshaffer1324@gmail.com (preferred method of contact)

## Installation/use guide

Open your CLI, navigate to desired file destination, simply clone the repo in your desired file location, open the repo in your preferred code editor, once there - open the packages.json folder in integrated terminal, run npm install, close terminal once packs have installed, open the index.js file in your integrated terminal, run node index, fulfill prompts, after prompts have been fulfilled an svg file will be generated. 
<br/> <br/>
*Note* Use of same file name will overwrite pre-existing files with that name. 

## Contribution

Create a feature branch and edit there. After, push up for review. 