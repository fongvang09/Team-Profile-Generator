// parent

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id= id;
        this.email = email;
        this.role = role;
    }
    getName = () => this.name;

    getID = () => this.id;

    getEmail = () => this.email;

    getRole = () => "Employee";
}


module.exports = Employee;