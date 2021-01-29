class Engineer {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}


module.exports = Engineer;