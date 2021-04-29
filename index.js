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
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process: "
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide project usage: "
    },
    {
        type: "list",
        name: "license",
        message: "Please provide project license: ",
        choices: [
            "MIT",
            "Mozilla",
            "Open",
            "Academic"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors for this project: "
    },
    {
        type: "input",
        name: "test",
        message: "Is tests included for this project?: "
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email: "
    }
];

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