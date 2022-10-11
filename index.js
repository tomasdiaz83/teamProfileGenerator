const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = require('./lib/inquirerQuestions')
const inquirer = require('inquirer');

let team = {
    Manager: "",
    Engineers: [],
    Interns: []
}

//Prompts user to create a a Manager
const createManager = async() => {
    return inquirer
        .prompt(questions.Manager)
        .then(answers => {
            //Adds manager to the members object
            team.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        })
}

//Prompts user to create an employee
const createEmployee = async() => {
    console.log(`
    ===========================
    Adding employee to the team
    ===========================
    `);
    return inquirer
    .prompt(questions.Employee)
    .then((answers) => {
        let { role, name, id, email, gitHub, school, addEmployee } = answers;
        
        if (role === "Engineer") {
            team.Engineers.push(new Engineer (name, id, email, gitHub))
        } else if (role === "Intern") {
            team.Interns.push(new Intern (name, id, email, school))
        }

        if (addEmployee) {
            return createEmployee();
        } else {
            return;
        }
    })
}

createManager(team)
    .then(() => {
        console.log()
        createEmployee();
    })