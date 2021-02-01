const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, email, role, school) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;

        super(school);
        this.school = school;
    }
    // getName = () => this.name;

    // getID = () => this.ID;

    // getEmail = () => this.email;

    getRole = () => "Intern";

    getSchool = () => this.school;

}



module.exports = Intern;