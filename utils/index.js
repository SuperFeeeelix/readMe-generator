// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("../utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name:'title',
    Message: 'What is your title?',

}, {
    type: 'input',
    name: 'description',
    message: 'what is the description of your project? give lots of details. '

}, {
    type: 'input',
    name: 'require',
    message: 'List any project dependencies here.'

}, {
    type: 'checkbox',
    name: 'license',
    message: 'what license did you use?',
    choices: ['MIT', 'Apache2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],

}, {
    type: 'input',
    name: 'usage',
    message: 'state the languages used for this project?'
}, {
    type: 'input',
    name: 'name',
    message: 'What is your Full-name?',

}, {
    type: 'input',
    name: 'email',
    message: 'What is your Email?'

}, {
    type: 'input',
    name: 'creator',
    message: 'Write your GitHub Account',
}, {
    type: 'input',
    name: 'contributors',
    message: 'Please list contributors. (use GitHub Usernames)',

}, {
    type: 'input',
    name: 'test',
    message: 'Testing?',
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
};



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
            console.log("Creating a README.md file...");
            writeToFile("\README.md", generateMarkdown({ ...responses}));
        })
}

// Function call to initialize app
init();
