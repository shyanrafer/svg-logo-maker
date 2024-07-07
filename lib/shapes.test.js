// inspired by https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/blob/main/lib/shapes.test.js

const { Circle, Square, Triangle } = require('../lib/JavaScript/shapes');

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        const color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="${color}" />`);
    });
});

// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        const color = 'pink';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,20 280,180 20,180" fill="${color}" />`);
    });
});
