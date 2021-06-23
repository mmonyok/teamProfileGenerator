const inquirer = require('inquirer');
const generate = require('./src/genHTML');
const create = require('./src/genEmployee');
const fs = require('fs');
// This is our empty temporal literal in which each employee temporal literal will be pushed in.
let employeeData = ``;

// These questions will run first and only one time.
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
    {
        type: 'list',
        message: "Would you like to continue building your team or stop?",
        choices: ['Continue', 'Stop'],
        name: 'conStop'
    },
];

// These questions will repeat until the user chooses not to add an additional employee.
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

// This function will allow the employee questions to be repeated until the user has input all employees, and then it will generate the HTML.
function empQuestions() {
    inquirer.prompt(empQuestionsArray).then((res) => {
        // If the user wants to add another employee push the current employees generated html into the temporal literal up top.
        if (res.askAgain) {
            employeeData += create.employee(res);
            empQuestions();
            // If the user is done adding employees, it will push the current one's html to the temporal literal up top and then generate the entire index.html file.
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

// This function will first run the questions about the manager, and then allow the user to decide if they want to add any other employees; if they do, then it will run the next function that generates all the employees. If they don't want to add employees, then it generate the index.html page.
function mgrQuestions() {
    inquirer.prompt(mgrQuestionsArray).then((res) => {
        // We don't ask the manager their role, becuase it is assumed at the beginnning, but it is necessary for the class data to work, so we add it here.
        res.role = 'Manager';
        // Pushes the generated manager data into the temporal literal up top.
        employeeData += create.employee(res);
        // If the user wants to add employees, will run the corresponding function.
        if (res.conStop === 'Continue') {
            empQuestions();
            // If the user doesn't want to add employees, then the index.html will be generated.
        } else {
            const fileName = "./dist/index.html";

            fs.writeFile(
                fileName,
                generate.HTML(employeeData),
                err => err ? console.error(err) : console.log("Your team is ready!"));
        }
    })
};

mgrQuestions();