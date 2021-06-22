const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function employee(data) {
    let newEmployee;
    let extraData;
    let employeeType = data.role;

    console.log("Employee function is running.");
    switch (employeeType) {
        case 'Manager':
            newEmployee = new Manager(data.name, data.id, data.email, data.role, data.office);
            extraData = newEmployee.getOfficeNumber();
            break;
        case 'Engineer':
            newEmployee = new Engineer(data.name, data.id, data.email, data.role, data.github);
            extraData = newEmployee.getGithub();
            break;
        case 'Intern':
            newEmployee = new Intern(data.name, data.id, data.email, data.role, data.school);
            extraData = newEmployee.getSchool();
            break;
    }

    let currentEmployee = `         <div class="container col-2 cardContainer">
                <div class="jumbotron">
                    <h2 class="display-6">${newEmployee.getName()}</h2>
                    <p class="lead">${newEmployee.getRole()}</p>
                </div>
                <div>
                    <div>
                        <p>ID: ${newEmployee.getId()}</p>
                    </div>
                    <div>
                        <p>Email: ${newEmployee.getEmail()}</p>
                    </div>
                    <div>
                        ${extraData}
                    </div>
                </div>
            </div>`

    if (data.askAgain) {
        return `${currentEmployee}\n`;
    } else {
        return currentEmployee;
    }
}

module.exports = {
    employee,
};