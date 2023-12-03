/*
This code is a Node.js application that prompts the user with a series of questions using the inquirer package
the user's responses are then used to generate a README.md file, using the generateMarkdown function.
*/
const inquirer = require('inquirer') // This line imports inquirer package, which is used to prompt the User with questions.
const fs = require('fs') // This line imports the fs Module,which is used to write the generated READMEfile to the file system.
const generateMarkdown= require('./utils/generateMarkdown') //This line imports GeneratMarkdown function fron the generateMarkdown.js

// TODO: Create an array of questions for user input
/* 
  This is an array of objects that defines the questions to be asked to the user. 
  Each object represents a question, and contains properties like type, name and message
*/
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
  /* 
  funtion writeToFile(fileName, data){ ... }  the funtion takes  a fileName and data parameter,
  and uses the fs.WriteFile method  to write the data to the specified fileName.
  */
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
  /*
  function init(){ ... } is the entry point  of the application. it logs a message to indicate 
  that the app is initialising and then prompts the user  with the questions using inquirer.prompt.
  The user's answers are then logged and passed to writeToFile function to generate the README file.
 */
function init() {

  console.log('Initializing the app...');

    // modified version of inquirer prompt instruction, copied from URL inquire-npm-documentation
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
  
init();  //this line calls the init function to start the application.