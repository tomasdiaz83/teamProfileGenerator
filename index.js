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
const createManager = () => {
    return inquirer
        .prompt(questions.Manager)
        .then(answers => {
            //Adds manager to the members object
            team.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            console.log(team);
        })
}

//Prompts user to create an employee
const createEmployee = (team) => {
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
            return createEmployee(team);
        } else {
            return team;
        }
    })
}

// //Prompts user to get the team
// function getTeam () {
//     return console.log(this.members);
// }

createManager(team)
    .then(createEmployee(team))