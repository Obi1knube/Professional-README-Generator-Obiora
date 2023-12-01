const generateMarkdown = (data) => {
  const { title, description, installation, usage, license, contribution, tests, questions, email,username } = data;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

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
// If there is no license, return an empty string

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
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

const renderLicenseSection = (license) => {
  if (license) {
    return `## License\n\nThis application is covered under the ${license} license.`;
  } else {
    return '';
  }
};
// TODO: Create a function to generate markdown for README {

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

module.exports = generateMarkdown;
