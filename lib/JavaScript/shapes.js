//  Pulled from https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/index.js

class Shape{
  // Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
  
      constructor(){
          this.color=''
      }
      setColor(color){
          this.color=(color);
      }
  }
  // Defines a Circle class that extends Shape and renders an SVG Circle with position, size, and fill color based on the current instance's properties.
  // Instance - moment in time - in relation to web dev: Specific realization of an object in OOP
  class Circle extends Shape{ // Extends passes characteritics from parent to child
      render(){
          return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
      }
  }
  // Defines a Square class that extends Shape and renders an SVG Square with position, size, and fill color based on the current instance's properties.
  class Square extends Shape{
      render(){
          return `<rect x="50" height="200" width="200" fill="${this.color}">`
      }
  }
  // Defines a Triangle class that extends Shape and renders an SVG Triangle with position, size, and fill color based on the current instance's properties.
  class Triangle extends Shape{
      render(){
          //return `<tri height="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}">'
          return `<tri height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
      }
  };
  
  // export the circle, square and triangle class specifically
//   They're objects so must include curlies - are classes so capitalize the names
  module.exports = {Circle, Square, Triangle}