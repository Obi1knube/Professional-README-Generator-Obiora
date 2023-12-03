# 09 Node.js Challenge: Professional README Generator

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

Here are some guidelines to help you get started:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Refer to the [Fullstack Blog Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for additional guidance on creating a video.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


This pseudo code outlines the steps to develop the command-line application that generates a professional README.md file based on user input. I have used it as a guide to implement the functionality in your javaScript Programminglanguage.

## Pseudocode
Pseudocode for this project 
1. Prompt the user for the following information:
   - Project title
   - Description
   - Installation instructions
   - Usage information
   - Contribution guidelines
   - Test instructions
   - License selection
   - GitHub username
   - Email address

2. Generate the README.md file with the following sections:
   - Title: Display the project title
   - Description: Display the project description
   - Table of Contents: Display links to different sections of the README
   - Installation: Display the installation instructions
   - Usage: Display the usage information
   - License: Display the selected license badge and explanation
   - Contributing: Display the contribution guidelines
   - Tests: Display the test instructions
   - Questions: Display the GitHub username with a link to the profile and email address with instructions to contact

3. Add functionality to make the Table of Contents links clickable, scrolling to the corresponding section in the README.

4. Save the generated README.md file.

5. Provide a way for the user to input their preferred license from a list of options.

6. Add the selected license badge near the top of the README and include a notice in the License section explaining the coverage of the application.

7. Add validation to ensure all required information is provided by the user.

8. Test the application by running it and verifying the generated README.md file.

9. Provide a walkthrough video demonstrating the functionality of the application.

10. Update the README of the project with the link to the walkthrough video.

11. Submit the project for review.

## Results

Now that all the steps has been followed, the programm has been developed and a waltkthrough video can be viewed at: [https://drive.google.com/file/d/1kpw_aQul_s7oa2NdZyH8_xHAcy5tDfXr/view](https://drive.google.com/file/d/1cgrXJlVJBBKPpIKUBCyX6ip322yVRZqn/view)

The codes are available at: https://github.com/Obi1knube/Professional-README-Generator-Obiora
