/* 
  The code defines a function generateMarkdown that takes in a data object as input.
  The data object contains various properties such as title, description, installation, etc.,
  which are destuctured from the data object.
*/
const generateMarkdown = (data) => {
  const { title, description, installation, usage, license, contribution, tests, questions, email,username } = data;

// TODO: Create a function that returns a license badge based on which license is passed in
/* 
  renderLicenseBadge is the no. 1 helper function, It takes a license value  and returns appropraite license badge
    based on the value. It uses a swtich statement  to determine the badge URL based on the license value,
    If there is no license, it returns an empty string
*/
const renderLicenseBadge = (license) => {
  if (license) {
    // Return the appropriate license badge based on the license value
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      // Add more cases for other licenses if needed
      default:
        return '';
    }
  } else {
    return '';
  }
};

// TODO: Create a function that returns the license link
/*
renderLicenseLink is the no.2 helper function. This function takes in a license value,
and returns the approprite license link based on the value.
It uses the switch statement to determine the license link URL based on the license value.
If there is no license, return an empty string
*/
const renderLicenseLink =(license)=>{
   //check if there is license
  if (license){
    //Return the license link based on the license value
    switch(license){
      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0':
          return '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
        case 'GPL 3.0':
          return '[GPL License 3.0](https://www.gnu.org/licenses/gpl-3.0)';
        // Add more cases for other licenses if needed
        default:
          return '';
      }
    } else {
      return '';
  }
};

// TODO: Create a function that returns the license section of README
/* 
  renderLicenseSection is the No. 3 helper function. It takes in the license value 
  and returns the licencse setion of the README. It includes the license badge, Licence notice and licence link
  If there is no license, it returns an empty string
*/
const renderLicenseSection = (license) => {
  if (license) {
    return `## License\n\nThis application is covered under the ${license} license.`;
  } else {
    return '';
  }
};
// TODO: Create a function to generate markdown for README {
  /*
  The generateMarkdown function returns a string that represents the content of the README file.
  it includes the Title, description, table of contents, installation, usage, license section (including the badge, notice and link),
  contribution guideline,etc.
  */

  return `
  
##  Title
   ${title}
  
## Description
${description}



## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)



## Installation
${installation}

## Usage
${usage}

## License
${renderLicenseBadge(license)}
${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Contributing
${contribution}

## Tests
${tests}

## Questions
${questions}


If you have any questions, you can reach out to me via email at ${email}. You can also find more information about me and my other projects on my GitHub profile: [${username}](https://github.com/${username}).
`;
};

//The generateMarkdown function is exported so it can be used in other modules
module.exports = generateMarkdown;
