// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of the project?',
        name: 'title',
        type: 'input',
        default: 'Project Title',
    },
    {
        message: 'What is the project description?',
        name: 'description',
        type: 'input',
        default: 'About this project:',
    },
    {
        message: 'What are the installation instructions?',
        name: 'install',
        type: 'input',
        default: 'How to install:',
    },
    {
        message: 'What is the usage information?',
        name: 'usage',
        type: 'input',
        default: 'How to use:',
    },
    {
        message: 'What are the contribution guidelines?',
        name: 'contributions',
        type: 'input',
        default: 'Contribution guidlines:',
    },
    {
        message: 'What are the test instructions?',
        name: 'test',
        type: 'input',
        default: 'Test instructions:',
    },
    {
        message: 'Choose a license:',
        name: 'license',
        type: 'list',
        default: ['license 1', 'license 2', 'license 3', 'license 4'],
    },
    {
        message: 'What is your Github username?',
        name: 'username',
        type: 'input',
        default: 'Github-Username',
    },
    {
        message: 'What is your email?',
        name: 'email',
        type: 'input',
        default: 'beyourself@yasskween.com',
    },
    {
        message: 'How should people reach you?',
        name: 'contactIns',
        type: 'input',
        default: 'Knock on my back door!',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// This will start the user prompts in the command line to get information
// for the REAME.md
function init() {
    return new Promise(function (resolve, reject) {
        inquirer
        .prompt(questions)
        .then(answers => {
            resolve(answers);
        })
        .catch(err => {
            reject(err);
        })
    });
};

// Function call to initialize app
init();
