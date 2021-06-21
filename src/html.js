// const data = require('../index');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
let i;

let employeeString = ``;

function generateHTML(data) {
    console.log("generateHTML function is running");
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <header class="jumbotron">
        <h1>My Team</h1>
    </header>
    <main>
        <div class="row">
            ${data}
        </div>
    </main>
</body>

</html>`;
}

function generateEmployee(data) {
    console.log("generateEmployee function is running");
    const newEmployee = new Employee(data[i].name, data[i].id, data[i].email, 'Employee')
    console.log(newEmployee);
    return `<div class="container col-2 cardContainer">
                <div class="jumbotron">
                    ${newEmployee.getName()}
                    ${newEmployee.getRole()}
                </div>
                <div>
                    <div>
                        ${newEmployee.getId()}
                    </div>
                    <div>
                        ${newEmployee.getEmail()}
                    </div>
                    <div>
                        <p>Office Number: 203</p>
                    </div>
                </div>
        </div>`
}

function createEmployees(data) {
    for (i = 0; i < data.length; i++) {
        let employeeTest;
        console.log("createEmployees function is running");
        if (i === 0) {
            employeeTest = generateEmployee(data);
        } else {
            employeeTest = `\n      ${generateEmployee(data)}`;
        }
        employeeString += employeeTest;
    }
    console.log("Employee String");
    console.log(employeeString);
    return generateHTML(employeeString);
}

module.exports = {
    createEmployees,
};