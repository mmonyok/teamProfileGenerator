const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        super(name, id, email);
        getGithub();
        // getRole() overridden to return 'Engineer';
    }
}

module.exports = Employee;