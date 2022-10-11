const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const questions = require('./inquirerQuestions')
const inquirer = require('inquirer');

class CreateTeam {
    constructor() {
        this.team = {};
    }

    createManager = () => {
        inquirer
            .prompt(questions.Manager)
            .then((answers) => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                team["manager"] = manager;
                console.log(team);  
            })
    }
}

module.exports = CreateTeam;