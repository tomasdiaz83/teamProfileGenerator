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
function createManager(team) {
    return inquirer
        .prompt(questions.Manager)
        .then(answers => {
            //Adds manager to the members object
            team.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            console.log(team);
        })
}

//Prompts user to create an employee
function createEmployee () {
    return inquirer.prompt(questions.Employee)
    .then((data) => {
        return data;
    })
}

//Prompts user to get the team
function getTeam () {
    return console.log(this.members);
}

createManager(team)