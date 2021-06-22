// Remove 'role' from classes, and update getRole() method.
// Change prompts to ask about manager info first.
// Remove getOfficeNumber() method.

const inquirer = require('inquirer');
const generate = require('./src/genHTML');
const create = require('./src/genEmployee');
const fs = require('fs');
let employeeData = ``;

const mgrQuestionsArray = [
    {
        message: "What is the team manager's name?",
        name: 'mgrName',
    },
    {
        message: "What is the team manager's employee ID?",
        name: 'mgrID',
    },
    {
        message: "What is the team manager's email?",
        name: 'mgrEmail',
    },
    {
        message: "What is the team manager's office number?",
        name: 'office',
    },
];

const empQuestionsArray = [
    {
        type: 'list',
        message: "What is the role of your employee?",
        choices: ['Engineer', 'Intern'],
        name: 'role',
    },
    {
        message: "What is your employee's full Name?",
        name: 'name',
    },
    {
        message: "What is your employee's ID number?",
        name: 'id',
    },
    {
        message: "What is your employee's email address?",
        name: 'email',
    },
    {
        message: "What is your employee's GitHub username?",
        name: 'github',
        when(data) {
            return data.role === 'Engineer';
        },
    },
    {
        message: "What is the name of your employee's school?",
        name: 'school',
        when(data) {
            return data.role === 'Intern';
        },
    },
    {
        type: 'confirm',
        message: "Do you want to add another employee?",
        name: 'askAgain',
    },
];

function empQuestions() {
    inquirer.prompt(empQuestionsArray).then((res) => {
        if (res.askAgain) {
            employeeData += create.employee(res);
            empQuestions();
        } else {
            employeeData += create.employee(res);
            console.log("Questions are done; kittens are generating your team!");

            const fileName = "./dist/index.html";

            fs.writeFile(
                fileName,
                generate.HTML(employeeData),
                err => err ? console.error(err) : console.log("Your team is ready!"));
        }
    })
};

function mgrQuestions() {
    inquirer.prompt(mgrQuestionsArray).then((res) => {
        res.role = 'Manager';
        employeeData += create.employee(res);
        empQuestions();
    })
};

mgrQuestions();