const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        return `<p class=" m-2"><i class="fas fa-graduation-cap"></i> School: ${this.school}</p>`
    };

    getRole() {
        return `<i class="fas fa-user-graduate"></i> Intern`;
    };
};

module.exports = Intern;