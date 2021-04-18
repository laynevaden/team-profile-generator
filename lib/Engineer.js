const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email);
        if (!username) {
            throw new Error("Expected parameter 'username' to be non-empty");
          }
        this.username = username;
    }

    getGithub() {
        return this.username;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

