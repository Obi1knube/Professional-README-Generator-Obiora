// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const question =[
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
      name:'installation instruction',
      message:'Add Installation Instruction',
  
    },
    {
      type: 'input',
      name:'title',
      message:'Title of Project',
  
    },
    {
      type: 'input',
      name:'title',
      message:'Title of Project',
  
    }
  
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



