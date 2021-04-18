const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        if (!phone) {
            throw new Error("Expected parameter 'phone' to be non-empty");
          }
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

