const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

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



inquirer.prompt([
    {
        "name": "name",
        "message": "What is the employee's name?",
        validate: getName => {
            if (getName) {
                return true;
            } else {
                console.log("Please enter a valid name:");
                return false;
            }
        }
    },
    {
        "name": "ID",
        "message": "What is the employee's ID?",
        validate: getID => {
            if (getID) {
                return true;
            } else {
                console.log("Please enter a valid ID:")
                return false;
            }
        }
    },
    {
        "name": "email",
        "message": "What is the employee's email?",
        validate: getEmail => {
            if (getEmail) {
                return true;
            } else {
                console.log("Please enter a valid email address:");
                return false;
            }
        }
    },
    {
        "type": "list",
        "name": "role",
        "message": "Please select the employee's role:",
        "choices": ["Manager", "Engineer", "Intern", "Employee"]
    }
])
    .then(response => {
        let html = `
        
        `;
        fs.writeFile("./dist/index.html", html, err => err ?
            console.log(err) : console.log("success"));
    });
