const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, email, role);
    };

    getOfficeNumber() {
        return `<p>Office Number: ${this.officeNumber}</p>`;
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Manager;