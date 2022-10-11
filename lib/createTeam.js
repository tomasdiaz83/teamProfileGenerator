const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const questions = require('./inquirerQuestions')
const inquirer = require('inquirer');

class CreateTeam {
    constructor() {
        this.team = {};
        this.team["manager"] = "";
        this.team["engineers"] = [];
        this.team["interns"] = [];
    }

    //Prompts user for a Manager
    async createManager () {
        return inquirer
            .prompt(questions.Manager)
            .then((answers) => {
                //Adds manager to the team object
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                this.team.manager = manager;
            })
    }

    async createEmployee () {
        return inquirer.prompt({
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another Employee?',
            choices: ['Yes, add an Engineer.', 'Yes, add an Intern.', 'No. Team Complete.'],
        })
        .then((data) => {
            //Either creates another engineer, or exits out
            if (data.newEmployee === 'Yes, add an Engineer.'){
                return this.createEngineer()
            } 
            if (data.newEmployee === 'Yes, add an Intern.') {
                return this.createIntern()
            }
            else {
                return this.getTeam()
            }
        })
    }

    //Prompts user for an Engineer
    async createEngineer () {
        return inquirer
            .prompt(questions.Engineer)
            .then((answers) => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                this.team.engineers.push(engineer);
            })
            .then(this.createEmployee)
        }

    //Prompts user for an inter
    async createIntern () {
        return inquirer
            .prompt(questions.Intern)
            .then((answers) => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                this.team.interns.push(intern);
            })
            .then(this.createEmployee)
    }

    getTeam = () => {
        return console.log(this.team);
    }
}

function init() {
    const newTeam = new CreateTeam;

    newTeam.createManager()
        .then(() => newTeam.createEmployee())
        //.then(() => newTeam.getTeam())
}

init();

module.exports = CreateTeam;