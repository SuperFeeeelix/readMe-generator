// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Description',
    message: 'what is the description of your project? give lots of details. '

}, {
    type: 'input',
    name: 'requirements',
    message: 'What is required to run this application'

}, {
    type: 'input',
    name: 'Licenses',
    message: 'what licenses did you use?',
    choices: ['MIT', 'Apache2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'none'],

}, {
    type: 'input',
    name: 'Usages',
    message: 'what languages did you use?'
}, {
    type: 'input',
    name: 'Name',
    message: 'What is your Full-name?',

}, {
    type: 'input',
    name: 'Email',
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
function writeFile(fileName, data) {
fs.writeFile(fileName, data, function (err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err)
    } else {
        console.log("File Created Successfully");
    }
});
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
