const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function employee(data) {
    let newEmployee;
    let role;
    let extraData;
    let employeeType = data.role;

    // Determines which instance of Employee should be generated, based on the role.
    switch (employeeType) {
        case 'Manager':
            newEmployee = new Manager(data.mgrName, data.mgrID, data.mgrEmail, data.office);
            role = `<i class="fas fa-tasks"></i> ${newEmployee.getRole()}`;
            extraData = `<p class=" m-2"><i class="far fa-building"></i> Office Number: ${newEmployee.getOfficeNumber()}</p>`;
            break;
        case 'Engineer':
            newEmployee = new Engineer(data.name, data.id, data.email, data.github);
            role = `<i class="fas fa-glasses"></i> ${newEmployee.getRole()}`
            extraData = `<p class=" m-2"><i class="fab fa-github"></i> GitHub: <a href="https://github.com/${newEmployee.getGithub()}" target="_blank" class="card-link">${newEmployee.getGithub()}</a></p>`;
            break;
        case 'Intern':
            newEmployee = new Intern(data.name, data.id, data.email, data.school);
            role = `<i class="fas fa-user-graduate"></i> ${newEmployee.getRole()}`;
            extraData = `<p class=" m-2"><i class="fas fa-graduation-cap"></i> School: ${newEmployee.getSchool()}</p>`;
            break;
    }

    // This will be all the html needed for one employee. It is the return and will be pushed into a temporal literal with any other generated employees.
    let currentEmployee =
        `            <div class="container col-2 border cardContainer">
                <div class="jumbotron card">
                    <h2 class="display-6">${newEmployee.getName()}</h2>
                    <p class="lead">${role}</p>
                </div>
                <div style="margin: 15px;">
                    <div class="border dataBox">
                        <p class=" m-2"><i class="far fa-id-badge"></i> ID: ${newEmployee.getId()}</p>
                    </div>
                    <div class="border my-1 dataBox">
                        <p class=" m-2"><i class="far fa-envelope"></i> Email: <a href="mailto:${newEmployee.getEmail()}">${newEmployee.getEmail()}</a></p>
                    </div>
                    <div class="border dataBox">
                        ${extraData}
                    </div>
                </div>
            </div>`

    // When employees after the first one get added, we have to add \n, so that the temporal literal goes on a new line and the HTML is generated properly.
    if (data.role === 'Manager') {
        return currentEmployee;
    } else {
        return `\n${currentEmployee}`;
    };
};

module.exports = {
    employee,
};