const { Circle, Square, Triangle } = require("./lib/JavaScript/shapes");

function generateSVG(answers) {
  // User text
  let user_text = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    // 1-3 chars, valid entry
    user_text = answers.text;
  } else {
    // 0 or 4+ chars, invalid entry
    console.log("Invalid input. Please enter 1-3 Characters.");
  }

  console.log("User text: [" + user_text + "]");

  // User font color
  let user_font_color = answers["text-color"];
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
  }

  if (user_shape) {
    user_shape.setColor(user_shape_color);
  }
}

module.exports = generateSVG;