const data = require('../index');

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return `<h2 class="display-6">${this.name}</h2>`;
    };

    getId() {
        return `<p>ID: ${this.id}</p>`;
    };

    getEmail() {
        return `<p>Email: ${this.email}</p>`;
    };

    getRole() {
        return `<p class="lead">${this.role}</p>`;
    };
};

module.exports = Employee;