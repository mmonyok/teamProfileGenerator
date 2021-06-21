const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    };

    getSchool() {
        return `<p>School: ${this.school}</p>`
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Intern;