const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
import('inquirer');

const questions = {
    Manager : [
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            default: "unnamed"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID?",
            default: "##########"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            default: "unknown"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            default: "########"
        },
    ],
    Engineer : [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            default: "unnamed"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's ID?",
            default: "##########"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            default: "unknown"
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the engineer's gitHub?",
            default: "unknown"
        },
    ],
    Intern : [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            default: "unnamed"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's ID?",
            default: "##########"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            default: "unknown"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            default: "unknown"
        },
    ]   
}

function init () {
    inquirer
        .prompt ([
            {
                type : 'list',
                name : 'init',
                message : 'Welcome to TeamCreator. Would you like to create a team?',
                choices : ['Yes', 'No']
            }
        ])
        .then((answers) => {
            if (answers.init === 'Yes') {
                createManager();
            } else {
                console.log("Thank you for using Team Creator!");
            }
        })
}

function createManager () {
    inquirer
        .prompt(questions.Manager)
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            console.log(manager);
        })
}

init()