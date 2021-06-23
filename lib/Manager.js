const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return `<p class=" m-2"><i class="far fa-building"></i> Office Number: ${this.officeNumber}</p>`;
    };

    getRole() {
        return `<i class="fas fa-tasks"></i> Manager`;
    };
};

module.exports = Manager;