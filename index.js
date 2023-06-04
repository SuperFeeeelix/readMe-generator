// TODO: Include packages needed for this application
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [{
    question: "What is the titile of the project?",
    answers: []

}]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeToFile(fileName,data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("you did it")
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
