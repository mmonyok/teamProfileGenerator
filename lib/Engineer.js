const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    };

    getGithub() {
        return `<p>GitHub: ${this.github}</p>`;
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Engineer;