const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, ID, email, role, gitHub) {
        super(name, ID, email, role)
        this.gitHub = gitHub;
    }

    getRole = () => "Engineer";

    getGithub = () => this.gitHub;
    
}


module.exports = Engineer;