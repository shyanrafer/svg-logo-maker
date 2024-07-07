// inspired by https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/lib/shapes.js

class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

// extends brings the parent constructor down to the children
class Circle extends Shape {
    render() {
        // using 'this' here applies the color from the instance
        // the rest of the syntax is positioning
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
}

// Exports the following specific objects from this page:
module.exports = { Circle, Square, Triangle };