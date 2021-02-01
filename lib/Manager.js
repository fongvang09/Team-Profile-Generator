const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, ID, email, role, officeNumber) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;

        super(officeNumber);
        this.officeNumber = officeNumber;
    }

    // getName = () => this.name;

    // getID = () => this.ID;

    // getEmail = () => this.email;

    getRole = () => "Manager";

    getOfficeNumber = () => this.officeNumber;
}


module.exports = Manager;