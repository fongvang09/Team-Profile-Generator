// child to Employee.js

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub) {
        super(name, id, email, role)
        this.gitHub = gitHub;
    }

    getRole = () => "Engineer";

    getGithub = () => this.gitHub;
    
}


module.exports = Engineer;