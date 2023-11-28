
const generateMarkdown = (title, description, table-of-content, installation, usage, license,contributing, tests, questions) =>
    
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <title>Professional README Generator</title>
</head>
<body>
<header class="p-5 m-4 header bg-light">
//copy and paste cards styling  code from bootstrap website 
 
</header>
    
</body>
</html>
    

`


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
//function renderLicenseLink(license) {}

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
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

const renderLicenseSection = (license) => {
  if (license) {
    return `
## License

This application is covered under the ${license} license.`
  } else {
    return '';
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  console.log(data)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can reach out to me via email at ${data.email}. You can also find more information about me and my other projects on my GitHub profile: [${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
