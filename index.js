// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')


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
    name:'test',
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
message:'Add Email address',

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



// TODO: Create a function to initialize app

function init() {
    // Add your initialization code here
    console.log('Initializing the app...');
    // ...
  }
  
// Function call to initialize app
module.exports = {
    questions,
    writeToFile,
    init
  };


init();




