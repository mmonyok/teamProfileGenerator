const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        super(name, id, email, role);
    };

    getGithub() {
        return `<p>GitHub: ${this.github}</p>`;
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Engineer;