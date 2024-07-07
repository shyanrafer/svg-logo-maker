// made a seperate file to accomodate the creation of the svg file just like we did for the readme generator

// import necessary file
const { Circle, Square, Triangle } = require("./shapes");

// inspired by https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js
class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }

    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }

    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// pulled from prior week and adapted to befit this assignment
function generateSVG(answers) {
    // User text is set to an empty string
    let user_text = "";
    // ensure specifc length of input
    if (answers.text.length === 3) {
        // 3 characters = valid entry
        user_text = answers.text;
    } else {
        console.log("Invalid text input. Please enter 3 Characters.");
        return;
    }

    // inspired by https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js
    console.log("User text: [" + user_text + "]");

    // User font color
    let user_font_color = answers["fontColor"];
    console.log("User font color: [" + user_font_color + "]");

    // User shape color
    let user_shape_color = answers.shapeColor;
    console.log("User shape color: [" + user_shape_color + "]");

    // User shape type
    let user_shape_type = answers["imgShape"];
    console.log("User entered shape = [" + user_shape_type + "]");

    // User shape
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square");
    } else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle");
    } else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle");
    } else {
        console.log("Invalid shape!");
        return;
    }

    user_shape.setColor(user_shape_color);

    const svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    
    // return render svg - applies data from this fx to render
    return svg.render();
}

// export the generateSVG fx
module.exports = generateSVG;
