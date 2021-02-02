// child to Employee.js

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // this.role = role;

        super(school);
        this.school = school;
    }
    // getName = () => this.name;

    // getid = () => this.id;

    // getEmail = () => this.email;

    getRole = () => "Intern";

    getSchool = () => this.school;

}



module.exports = Intern;