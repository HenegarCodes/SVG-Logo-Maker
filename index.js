const inquirer = require('inquirer');

const fs = require('fs');
const path = require('path')
const logoSVG = require('./lib/logo.svg');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

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
    const shape = new tSImportEqualsDeclaration(data.logo, data.textColor,data.shape, data.shapeColor)
    return shape.render()
  }
}



//TODO: create function intializing
function init() {

    inquirer.prompt(questions)
    .then((data) => {
        console.log("Logo Generating...");
        writeToFile("./lib/logo.svg", generateImg(data));
        console.log("Generated logo.svg");
    }

)}



init();







class logoMaker{
  constructor(logo, textColor, shape, shapeColor){
  
  }
}