const inquirer = require("inquirer")
const jest =  require("jest")
const fs = require("fs")
const employee = require("./employee")
const engineer = require("./engineer")
const intern = require("./intern")
const manager = require("./manager")

const main = [
    {
        type: "input",
        message: "How many members do you want to include in your team roster?",
        name: "teamRoster",
    },
    {
        type: "list",
        message: "Please select employee's role",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
    }
]
const employee = [
    {
        type: "input",
        message: "What is your name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is your employee ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "Please enter your office number:",
        name: "officeNumber",
    }
]
const engineer = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "Please enter the engineer's email address:",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "Please enter the engineer's GitHub username:",
        name: "engineerGitHub",
    },
]
const intern = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "Please enter the intern's email address:",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Which school did they go to?",
        name: "schoolName",
    },
]



// inquirer.prompt()
//     .then(response => {
//         let html = `
        
//         `;
//         fs.writeFile("./index.html", html, err => err ?
//         console.log(err) : console.log("success"));
//     });