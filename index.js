const inquirer = require('inquirer');

const fs = require('fs');
const path = require('path')
const logoSVG = require('./lib/logo.svg');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { Square } = require('./lib/shape');
const { Triangle } = require('./lib/shape');
const { Circle } = require('./lib/shape');


inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)



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
      choices: ['Circle', 'Triangle','Square']
    },
    {
      type: 'input',
      message: 'What color do you want your shape to be?',
      name: 'shapeColor',
    }




]





// TODO: Create a function to write image file

function generateImg(data){
  if(data.shape === 'Square'){
    const shape = new Square(data.logo, data.textColor,data.shape, data.shapeColor)
    return shape.render()
  }
  else if(data.shape === 'Circle'){
    const shape = new Circle(data.logo, data.textColor,data.shape, data.shapeColor)
    return shape.render()
  }else{
    const shape = new Triangle(data.logo, data.textColor,data.shape, data.shapeColor)
    return shape.render()
}
}



//TODO: create function intializing
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

init();


