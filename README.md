# Professional README.md Generator
​
## Table of contents
​
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Instructions](#instructions)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
​
​
## Overview
​
### The challenge
​
The README.md generator is a NodeJS command line application that will generate a professional README.md file from user input.  The application utilizes the Node Package Modules `inquirer` and `fs` to take user input in the command line and generate a new file using that input.  Professional README.md files are important for open source projects and this application will quickly generate the important sections and the appropriate license badge for the user's README.
​
### User Story
​
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
​
### Acceptance Criteria
​
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

​
### Instructions
​
This application will run from the command line.  Make sure that you are in the directory of the index.js file in your CLI for it to work; in the command line enter `node index.js` and follow the prompts.  The video linked below shows how to use the application.

[Demo Video](https://drive.google.com/file/d/11oZtRsfK3GwdXrVq6pUsri7d4UHruy5S/view)
​
​
### Links
​
- Solution URL: [https://github.com/Unicorn-Barf/Readme_Generator](https://github.com/Unicorn-Barf/Readme_Generator)
​
## My process
​
### Built with
​
- JavaScript
- NodeJS
​
​
### What I learned
​
This project provided me with my first experience making a NodeJS command line application.  I was provided with starter code with a package.json file.  This allowed me to run `npm install` in my CLI to get the neccessary node-modules and package-lock.json file.  Luckily, the starter code mapped out the general code structure for the project so only the details needed to be filled in. 


First, the neccessary modules and utilities had to be imported using the `require` command.  From here, I learned how to use the inquire module.  The code below shows how I used a questions object passed to the inquire module: `.prompt(questions)`.  Inquirer returns a promise object so the necessary `.then` and `.catch` syntax was utilized to access the data that was needed.

```js
function init() {
        inquirer
        .prompt(questions)
        .then(answers => {
            writeToFile(answers.fileName, answers);
        })
        .catch(err => {
            console.log(err);
        });
};
```
The application uses modularization in order to keep the code clean and DRY.  The init function starts the inquire prompts in the command line.  From here, I needed to know how to use that data.  As seen in the code sample above, `writeToFile()` is called with the promise data returned from the `inquirer.prompt()` so that the user input can be used to generate a markdown file.  Below is a the `writeToFile()` function:

```js
function writeToFile(fileName, data) {
    console.log('hit');
    fs.writeFile(`${fileName}`, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Sucess!');
        }
    })
}
```

As seen above, the `writeToFile()` function can easily create a .md file with the file name entered by the user.  It uses the `generateMarkdown()` utility that was exported from utilities and imported into the index.js file.  It seamlessly provides the generated markdown file to be written to a new file named by the user.
​
### Continued development
​
I am inspired by this project to come up with a more intesive command line app that can create custom readme outlines quickly.  It interests me to develop a version of this application that can create any README.md skeleton to fit any project type.  I would find it very useful to save time when writing a new README for any of my projects.
​
### Useful resources
​
- [Markdown License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) - This is a Github repo by user lukas-h; it contains copy/paste ready license badge images that are clickable links already formatted for mardown.
- [NPM inquirer docs](https://www.npmjs.com/package/inquirer) - This is NPM's docs for the inquirer module which was a very helpful reference to make sure I was using the correct syntax in my code.
​
## Author
​
- Website - [Nolan Spence](https://unicorn-barf.github.io/Portfolio_Website_HTML_CSS/)
- LinkedIn - [https://www.linkedin.com/in/aerospence/](https://www.linkedin.com/in/aerospence/)
​
## Acknowledgments
​
Manny was great at introducing me to creating a NodeJS application.  Thanks Manny!!

