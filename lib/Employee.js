// parent

class Employee {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }
    getName = () => this.name;

    getID = () => this.ID;

    getEmail = () => this.email;

    getRole = () => "Employee";
}


// function sum(a,b) {
//     return a + b;
// }

module.exports = Employee;