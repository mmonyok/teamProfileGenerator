// const data = require('../index');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

let employeeArray = {};

function generateHTML(data) {
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
            <div class="container col-2 cardContainer">
                <div class="jumbotron">
                    <h2 class="display-6">Melody Monyok</h2>
                    <p class="lead">Manager</p>
                </div>
                <div>
                    <div>
                        <p>ID: 17</p>
                    </div>
                    <div>
                        <p>Email: monyokwebdev@gmail.com</p>
                    </div>
                    <div>
                        <p>Office Number: 203</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>`;
}

/* function generateEmployee(data) {
    for (let i = 0; i < data.length; i++) {
        // let x = i + 1;
        const employee = new Employee(data[i].name, data[i].id, data[i].email, 'Employee')
        employeeArray.push(employee);
    }
} */

module.exports = {
    generateHTML,
};