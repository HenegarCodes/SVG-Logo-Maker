const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { Square, Circle, Triangle } = require('./lib/shape');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = [
  {
    type: 'maxlength-input',
    message: 'What 3 letters do you want your logo to include?',
    name: 'logo',
    maxLength: 3,
  },
  {
    type: 'input',
    message: 'What text color do you want? (enter a regular color name or hexidecimal)',
    name: 'textColor',
  },
  {
    type: 'rawlist',
    message: 'What shape do you want your logo to be?',
    name: 'shape',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    message: 'What color do you want your shape to be?',
    name: 'shapeColor',
  },
];

// TODO: Create a function to write image file
function generateImg(data) {
  let shape;
  if (data.shape === 'Square') {
    shape = new Square(data.textColor, data.shapeColor, data.logo);
    
  } else if (data.shape === 'Circle') {
    shape = new Circle(data.textColor, data.shapeColor, data.logo);
    
  } else {
    shape = new Triangle(data.textColor, data.shapeColor, data.logo);
    
  }
  return shape.render();
}

// TODO: create function initializing function
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      console.log('Logo Generating...');
      const generatedImage = generateImg(data);
      fs.writeFile('./lib/logo.svg', generatedImage, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('SVG image was generated successfully');
        }
      });
    })
    .catch((error) => {
      console.error('Error in inquirer:', error);
    });
}

// Call the init function to start the application
init();
