// child to Employee.js

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        // this.role = role;

        super(officeNumber);
        this.officeNumber = officeNumber;
    }

    // getName = () => this.name;

    // getid = () => this.id;

    // getEmail = () => this.email;

    getRole = () => "Manager";

    getOfficeNumber = () => this.officeNumber;
}


module.exports = Manager;