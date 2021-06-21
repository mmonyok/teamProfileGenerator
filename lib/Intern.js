const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        super(name, id, email, role);
    };

    getSchool() {
        return `<p>School: ${this.school}</p>`
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Intern;