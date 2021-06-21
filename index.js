const inquirer = require('inquirer');
const generate = require('./src/genHTML');
const create = require('./src/genEmployee');
const fs = require('fs');
let employeeData = ``;

const questions = [
    {
        message: "What is your employee's full Name?",
        name: 'name',
    },
    {
        type: 'number',
        message: "What is your employee's ID number?",
        name: 'id',
    },
    {
        message: "What is your employee's email address?",
        name: 'email',
    },
    {
        type: 'list',
        message: "What is the role of your employee?",
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'role',
    },
    {
        type: 'number',
        message: "What is your manager's office number?",
        name: 'office',
        when(data) {
            return data.role === 'Manager';
        },
    },
    {
        message: "What is your engineer's GitHub username?",
        name: 'github',
        when(data) {
            return data.role === 'Engineer';
        },
    },
    {
        message: "What is the name of your intern's school?",
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

function askQuestions() {
    inquirer.prompt(questions).then((answers) => {        
        if (answers.askAgain) {
            employeeData += create.employee(answers);
            askQuestions();
        } else {
            employeeData += create.employee(answers);
            console.log("Questions are done; kittens are generating your team!");

            const fileName = "./dist/index.html";

            fs.writeFile(
                fileName,
                generate.HTML(employeeData),
                err => err ? console.error(err) : console.log("Your team is ready!"));
        }
    })
};

askQuestions();