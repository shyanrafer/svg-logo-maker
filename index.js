// import necessary pacaks and files
const fs = require('fs');
const inquirer = require("inquirer");
const generateSVG = require('./lib/JavaScript/generateSVG');

// questions array to be prompted later
const questions = [
    {
        name: "title",
        message: "Enter the title of your svg file:"
    },
    {
        name: "text",
        message: "TEXT: Enter up to (3) Characters:"
    },
    {
        name: "fontColor",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):"
    },
    {
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):"
    },
    {
        type: "list",
        name: "imgShape",
        message: "Choose which shape you would like:",
        choices: ["Circle", "Square", "Triangle"]
    }
];

// writeToFile fx copied from last week and adapted for this assignment
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.svg`, data, err => {
        if (err) {
            console.log("Error!");
        } else {
            console.log("SVG file written!");
        }
    });
}


// basis for this snippet was gathered from https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js
async function init() {
    try {
        // assign the inputs from user to answers
        const answers = await inquirer.prompt(questions);

        // create the content with generateSVG and answers as param
        const svgContent = generateSVG(answers);
        if (svgContent) { // if there is content, writes file
            // uses title from answers to write the file name, uses the content from svg to write the file content
            writeToFile(answers.title, svgContent);
        }
    } catch (error) { // otherwise logs an error
        console.error('An error occurred:', error);
    }
}

init();
