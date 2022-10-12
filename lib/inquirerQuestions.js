const validator = require('email-validator');

module.exports = {
    Manager : [
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("\n     Please enter a name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID?",
            validate: input => {
                if  (isNaN(input)) {
                    console.log ("\n     Please enter a numerical ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: input => {
                valid = validator.validate(input);
                if (valid) {
                    return true;
                } else {
                    console.log ('\n     Please enter a valid email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: input => {
                if  (isNaN(input)) {
                    console.log ("\n     Please enter a valid office number.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
    ],
    Employee : [
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("\n     Please enter a name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID?",
            validate: input => {
                if  (isNaN(input)) {
                    console.log ("\n     Please enter a number.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: input => {
                valid = validator.validate(input);
                if (valid) {
                    return true;
                } else {
                    console.log ('\n     Please enter a valid email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is the employee's gitHub?",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("\n     Please enter a github username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log ("\n     Enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ]
}