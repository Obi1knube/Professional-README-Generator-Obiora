// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown= require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions =[
    {
      type: 'input',
      name:'title',
      message:'Add title of Project',
    },
    {
      type: 'input',
      name:'description',
      message:'Add description of Project',
  
    },
    {
      type: 'input',
      name:'installation',
      message:'Add Installation Instruction',
  
    },
    {
      type: 'input',
      name:'usage',
      message:' Add Usage information',
  
    },
    {
      type: 'input',
      name:'contribution',
      message:'Add Contribution guidelines',
    },
    {
    type: 'input',
    name:'tests',
    message:'Add Test instructions',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select License',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None']
  },
{
type: 'input',
name:'username',
message:'Add GitHub username',

},
{
type: 'input',
name:'email',
message:'Add Your Email address',

}
  
  ];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README file created successfully!');
  });
}
 // Function call to initialize app
function init() {

  console.log('Initializing the app...');

    // modified prompt instruction coppied from inquire-npm-documentation
    inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);

      //write user feedback as a file README.md in the util-Folder
writeToFile('./utils/README.md',generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

  }
  
//CALLBack

init();




