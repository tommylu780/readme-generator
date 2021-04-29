// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const readmeGenerate = require("./utils/generateMarkdown.js");
const writeDataAsync = util.promisify(fs.write);
// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fileName = 'README.md';

//     fs.writeFile(fileName, data, (err) =>
//         err ? console.log(err) : console.log('Successfully created README.md file')
//     );
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            fs.writeFile("README.md", readmeGenerate(data), (err) =>
                err ? console.log(err) : console.log('Successfully created README.md file')
            );
        })
}

// Function call to initialize app
init();