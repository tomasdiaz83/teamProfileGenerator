// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');
// const questions = require('./inquirerQuestions')
// const inquirer = require('inquirer');

// //Prompts user to create a a Manager
// function createManager() {
//     return inquirer
//         .prompt(questions.Manager)
//         .then(answers => {
//             //Adds manager to the members object
//             const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
//             this.members.manager = manager;
//         })
// }

// //Prompts user to create an employee
// function createEmployee () {
//     return inquirer.prompt(questions.Employee)
//     .then((data) => {
//         return data;
//     })
// }

// //Prompts user to get the team
// getTeam = () => {
//     return console.log(this.members);
// }

// module.exports = CreateTeam;