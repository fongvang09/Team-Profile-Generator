const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

// const team = []

// const employee = [
//     {
//         type: "input",
//         message: "How many members do you want to include in your team roster?",
//         name: "teamRoster",
//     },
//     {
//         type: "list",
//         message: "Please select employee's role",
//         name: "role",
//         choices: ["Manager", "Engineer", "Intern"]
//     }
// ]

const manager = [
    {
        type: "input",
        message: "What is the manager's name?",
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
    },
    {
        type: "list",
        message: "Select your role:",
        name: "managerRole",
        choices: ["Manager"]
    },
// ]

// const engineer = [
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
        name: "gitHub",
    },
    {
        type: "list",
        message: "Select your role:",
        name: "engineerRole",
        choices: ["Engineer"]
    },
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName2",
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerID2",
    },
    {
        type: "input",
        message: "Please enter the engineer's email address:",
        name: "engineerEmail2",
    },
    {
        type: "input",
        message: "Please enter the engineer's GitHub username:",
        name: "gitHub2",
    },
    {
        type: "list",
        message: "Select your role:",
        name: "engineerRole2",
        choices: ["Engineer"]
    },
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName3",
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerID3",
    },
    {
        type: "input",
        message: "Please enter the engineer's email address:",
        name: "engineerEmail3",
    },
    {
        type: "input",
        message: "Please enter the engineer's GitHub username:",
        name: "gitHub3",
    },
    {
        type: "list",
        message: "Select your role:",
        name: "engineerRole3",
        choices: ["Engineer"]
    },
// ]

// const intern = [
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
        name: "school",
    },
    {
        type: "list",
        message: "Select your role:",
        name: "internRole",
        choices: ["Intern"]
    }
]



// inquirer.prompt([
//     {
//         "name": "name",
//         "message": "What is the employee's name?",
//         validate: getName => {
//             if (getName) {
//                 return true;
//             } else {
//                 console.log("Please enter a valid name:");
//                 return false;
//             }
//         }
//     },
//     {
//         "name": "ID",
//         "message": "What is the employee's ID?",
//         validate: getID => {
//             if (getID) {
//                 return true;
//             } else {
//                 console.log("Please enter a valid ID:")
//                 return false;
//             }
//         }
//     },
//     {
//         "name": "email",
//         "message": "What is the employee's email?",
//         validate: getEmail => {
//             if (getEmail) {
//                 return true;
//             } else {
//                 console.log("Please enter a valid email address:");
//                 return false;
//             }
//         }
//     },
//     {
//         "type": "list",
//         "name": "role",
//         "message": "Please select the employee's role:",
//         "choices": ["Manager", "Engineer", "Intern", "Employee"]
//     }])
//     .then(response => {
//         if (response.role === "Manager") {
//             inquirer.prompt([{ manager }])
//                 .then(response => {
//                     console.log(response.officeNumber);

//                     const Manager = new Manager(response.name, response.id, response.email, response.role, response.officeNumber)
//                     team.push(Manager);
//                     addEmployee("Would you like to add another employee?")
//                 })
//         }
//     })



    //  else if (
    //         response.role === "Engineer") {
    //         inquirer.prompt([{ engineer }])
    //             .then(response => {
    //                 addEmployee("Would you like to add another employee?")
    //             })
    //     } else if (
    //         response.role === "Intern") {
    //         inquirer.prompt([{ intern }])
    //             .then(response => {
    //                 addEmployee("Would you like to add another employee?")
    //             })
    //     }

    //     function addEmployee() {
    //         inquirer.prompt([{
    //             "type": "confirm",
    //             "name": "addNewEmployee",
    //             "message": "Would you like to add another employee?"
    //         }])



    //     }
    // })

inquirer.prompt(manager)
    .then(response => {
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="style.css">
            <title>Document</title>
        </head>
        
        <body>
            <header>
                <h1 style="text-align: center;">My Team</h1>
            </header>
            <br>
            <br>
            <div class="row">
                <ul>
                    <li>
                        <div class="card">
                            <header class="subsection-header">
                                <h2>${response.managerName}</h2>
                                <h3>${response.managerRole}</h3>
                            </header>
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${response.managerID}</li>
                                <li class="list-group-item">Email: <a href="mailto:${response.managerEmail}" target="_blank">${response.managerEmail}</a></li>
                                <li class="list-group-item">Office number: ${response.officeNumber}</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                        <header class="subsection-header">
                        <h2>${response.engineerName}</h2>
                        <h3>${response.engineerRole}</h3>
                    </header>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${response.engineerID}</li>
                        <li class="list-group-item">Email: <a href="mailto:${response.engineerEmail}" target="_blank">${response.engineerEmail}</a></li>
                        <li class="list-group-item">GitHub: <a href="${response.gitHub} target="_blank"">https://github.com/${response.gitHub}</a></li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                        <header class="subsection-header">
                        <h2>${response.engineerName2}</h2>
                        <h3>${response.engineerRole2}</h3>
                    </header>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${response.engineerID2}</li>
                        <li class="list-group-item">Email: <a href="mailto:${response.engineerEmail2}" target="_blank">${response.engineerEmail2}</a></li>
                        <li class="list-group-item">GitHub: <a href="${response.gitHub2} target="_blank"">https://github.com/${response.gitHub2}</a></li>
                        </ul>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                        <header class="subsection-header">
                        <h2>${response.engineerName3}</h2>
                        <h3>${response.engineerRole3}</h3>
                    </header>
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${response.engineerID3}</li>
                        <li class="list-group-item">Email: <a href="mailto:${response.engineerEmail3}" target="_blank">${response.engineerEmail3}</a></li>
                        <li class="list-group-item">GitHub: <a href="${response.gitHub3} target="_blank"">https://github.com/${response.gitHub3}</a></li>
                        </ul>
                        </div>
                    </li>
                    <li>
                    <div class="card">
                    <header class="subsection-header">
                    <h2>${response.internName}</h2>
                    <h3>${response.internRole}</h3>
                </header>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${response.internID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${response.internEmail}" target="_blank">${response.internEmail}</a></li>
                    <li class="list-group-item">School: ${response.school}</li>
                    </ul>
                    </div>
                </li>
                </ul>
            </div>
        
            <footer></footer>
        </body>
        
        </html>
        `;
        fs.writeFile("./dist/index.html", html, err => err ?
            console.log(err) : console.log("success"));
        // fs.writeFile("./src/page-template.js", html, err => err ?
        //     console.log(err) : console.log("success"));
    });



    // inquirer.prompt()
    //     .then(response) => {
    //         let html = `
    //         <li>
    //         <div class="card">
    //         <header class="subsection-header">
    //         <h2>${response.name}</h2>
    //         <h3>${response.role}</h3>
    //     </header>
    //     <ul class="list-group">
    //         <li class="list-group-item">ID: ${response.ID}</li>
    //         <li class="list-group-item">Email: <a href="mailto:${response.email}" target="_blank">${response.email}</a></li>
    //         <li class="list-group-item">Office number: ${response.officeNumber}</li>
    // </div>
    //     </li>
    //         `;
    //     }