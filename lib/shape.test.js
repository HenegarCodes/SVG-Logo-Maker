const { Square, Circle, Triangle } = require('./shape');

describe('Shapes', () => {
  test('Square shape renders correctly', () => {
    const square = new Square('Yellow', 'red', 'TEA');
    expect(square.render()).toMatch('<rect');
  });

  test('Circle shape renders correctly', () => {
    const circle = new Circle('Purple', 'green', 'EAT');
    expect(circle.render()).toMatch('<circle');
  });

  test('Triangle shape renders correctly', () => {
    const triangle = new Triangle('Teal', 'purple', '234');
    expect(triangle.render()).toMatch('<polygon');
  });
});