const fs = require('fs')
const inquirer = require("inquirer");
const generateSvg = require('./lib/JavaScript/generateSVG')
const { Circle, Square, Triangle } = require("./lib/JavaScript/shapes");

// Imports the graceful-fs, inquirer, Circle, Square, and Triangle modules.
// Defines a Svg class that has a constructor with three methods for rendering and setting the text and shape elements in the SVG string.

class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    } // position text and then apply inputted text and color to text
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    } // apply inputted shape
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

// Defines array of 'questions' using the 'inquirer' library with the following questions.
// Each question is an object that specifies the properties of TEXT, TEXT COLOR, SHAPE COLOR, and Pixel Image.
const questions = [
	  {
      name: "title",
			message: "Enter the title of your svg file."
		},
    {
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "imgShape",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
// function writeToFile(fileName, data) {
// 	console.log("Writing [" + data + "] to file [" + fileName + "]")
//     fs.writeFile(fileName.svg, data, function (err) {
//         if (err) {
//             return console.log(err);
//         }
//         console.log("Kuddos, you generated an SVG file!");
//     });
// }


// TODO: Create a function to initialize app


// Pulled from https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js for inspiration
// async function init() {
// 	let svgString = ""; 

//     // Prompt the user for answers
//     const answers = await inquirer.prompt(questions);



// 	// Create a new Svg instance and add the shape and text elements to it
// 	const svg = new Svg();
// 	svg.setTextElement(user_text, user_font_color);
// 	svg.setShapeElement(user_shape);
// 	svgString = svg.render();
	
// 	//Print shape to log
// 	console.log("Displaying shape:\n\n" + svgString);
// 	document.getElementById("svg_image").innerHTML = svgString;

// 	console.log("Shape generation complete!");
// 	console.log("Writing shape to file...");
// 	writeToFile(svg_file, svgString); 
// }
// init()

// Since this is a lot like last week's assigntment I pulled the following and adapted for this project
function writeToFile(fileName, data) { 
  fs.writeFile(`${fileName}.svg`, data, err => err? console.log("Error!") : console.log("File Written!") )

}


// Since this is a lot like last week's assigntment I pulled the following and adapted for this project
function init() {
  // call inquirer, use the prompt method with questions as the param.
  inquirer
    .prompt(questions)
    // then use the answers 
    .then((answers) => {
      console.log("Task complete")
      console.log(answers);
      const sv_g = generateSvg(answers);
      console.log(sv_g)
      // once we have data, write to file
      writeToFile(answers.title, sv_g);
    })
}
init()