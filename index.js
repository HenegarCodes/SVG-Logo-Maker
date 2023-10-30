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

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }
  
  



//TODO: create function intializing
function init() {

    inquirer.prompt(questions)
    .then((responses) => {
        console.log("Logo Generating...");
        writeToFile("logo.svg", logoSVG({...responses}));
        console.log("Generated logo.svg");
    }

)}



init();

