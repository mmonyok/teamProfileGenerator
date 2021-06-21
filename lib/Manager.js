const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return `<p>Office Number: ${this.officeNumber}</p>`;
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Manager;