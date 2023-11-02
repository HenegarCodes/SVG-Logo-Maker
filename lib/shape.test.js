const { Square, Circle, Triangle } = require('./shape');

describe('Shapes', () => {
  test('Square shape renders correctly', () => {
    const square = new Square('black', 'red', 'XYZ');
    expect(square.render()).toMatch('<rect');
  });

  test('Circle shape renders correctly', () => {
    const circle = new Circle('blue', 'green', 'ABC');
    expect(circle.render()).toMatch('<circle');
  });

  test('Triangle shape renders correctly', () => {
    const triangle = new Triangle('white', 'purple', '123');
    expect(triangle.render()).toMatch('<polygon');
  });
});