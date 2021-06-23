const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGithub() {
        return `<p class=" m-2"><i class="fab fa-github"></i> GitHub: <a href="https://github.com/${this.github}" target="_blank" class="card-link">${this.github}</a></p>`;
    };

    getRole() {
        return `<i class="fas fa-glasses"></i> Engineer`;
    };
};

module.exports = Engineer;