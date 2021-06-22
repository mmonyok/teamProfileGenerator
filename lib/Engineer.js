const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return `<p>GitHub: ${this.github}</p>`;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;