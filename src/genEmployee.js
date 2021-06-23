const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function employee(data) {
    let newEmployee;
    let extraData;
    let employeeType = data.role;

    switch (employeeType) {
        case 'Manager':
            newEmployee = new Manager(data.mgrName, data.mgrID, data.mgrEmail, data.office);
            extraData = newEmployee.getOfficeNumber();
            break;
        case 'Engineer':
            newEmployee = new Engineer(data.name, data.id, data.email, data.github);
            extraData = newEmployee.getGithub();
            break;
        case 'Intern':
            newEmployee = new Intern(data.name, data.id, data.email, data.school);
            extraData = newEmployee.getSchool();
            break;
    }

    let currentEmployee = 
`            <div class="container col-2 border cardContainer">
                <div class="jumbotron card">
                    <h2 class="display-6">${newEmployee.getName()}</h2>
                    <p class="lead">${newEmployee.getRole()}</p>
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

    if (data.role === 'Manager') {
        return currentEmployee;
    } else {
        return `\n${currentEmployee}`;
    };
};

module.exports = {
    employee,
};