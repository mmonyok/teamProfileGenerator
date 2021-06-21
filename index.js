const inquirer = require('inquirer');
const html = require('./src/html');
const fs = require('fs');
const util = require('util');

let employeeData = [];

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
        employeeData.push(answers);
        if (answers.askAgain) {
            askQuestions();
        } else {
            console.log("Questions are done!");
            console.log(employeeData);
            console.log(employeeData.length);
            return employeeData;
        }
    }).then(data => {
        const fileName = "./dist/index.html";
        
        fs.writeFile(
            fileName,
            html.generateHTML(data),
            err => err ? console.error(err) : console.log("Your team is ready!"));
    })};

askQuestions();