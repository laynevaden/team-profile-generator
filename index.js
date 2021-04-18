const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
// require all the Classes

// Move this to another script
const showMenu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do next? ',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Team']
        }
    ])
    .then(answers => {
        switch (answers.menuChoice) {
            case 'Add an Engineer':
                getEngineer();
                break;
            case 'Add an Intern':
                getIntern();
                break;
            default:
                renderHTML();
                break;
            }
        }
    )
    .catch(error => {
        console.log(error);
        });
}

const getManager = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: "Welcome to the Team Profile Generator! Please enter the manager's name: ",
            validate: function(value) {
                let pass = (value.length > 1);
                return pass || 'Please enter a name';
            }
        },
        {
            type: 'input',
            name: 'mgrID',
            message: "Manager's employee ID: ",
            validate: function (value) {
                let pass = !isNaN(parseInt(value));
                return pass || 'Please enter a number';
            }
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: "Manager's email: ",
            validate: function (value) {
                let pass = value.match(/^[\w-]+@[\w-]+\.[\w-]+$/);
                return pass || 'Please enter a valid email';
            }
        },
        {
            type: 'input',
            name: 'mgrPhone',
            message: "Manager's office phone: ",
            validate: function (value) {
                let pass = value.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
                return pass || 'Please enter a valid phone number';
            }
        }
    ])
    .then(answers => {
        // manager = new Employee(answers.mgrName, parseInt(answers.mgrID), answers.mgrEmail);
        console.log(answers);
        showMenu();
    })
    .catch(error => {
        console.log(error);
        });
}

const getEngineer = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'egrName',
            message: "Please enter the engineer's name: ",
            validate: function(value) {
                let pass = (value.length > 1);
                return pass || 'Please enter a name';
            }
        },
        {
            type: 'input',
            name: 'egrID',
            message: "Engineer's employee ID: ",
            validate: function (value) {
                let pass = !isNaN(parseInt(value));
                return pass || 'Please enter a number';
            }
        },
        {
            type: 'input',
            name: 'egrEmail',
            message: "Engineer's email: ",
            validate: function (value) {
                let pass = value.match(/^[\w-]+@[\w-]+\.[\w-]+$/);
                return pass || 'Please enter a valid email';
            }
        },
        {
            type: 'input',
            name: 'egrGitHub',
            message: "Engineer's GitHub username: ",
            validate: function(value) {
                let pass = (value.length > 1);
                return pass || 'Please enter a username';
            }
        }
    ])
    .then(answers => {
        // manager = new Employee(answers.mgrName, parseInt(answers.mgrID), answers.mgrEmail);
        console.log(answers);
        showMenu();
    })
    .catch(error => {
        console.log(error);
        });
}

const getIntern = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'intName',
            message: "Please enter the intern's name: ",
            validate: function(value) {
                let pass = (value.length > 1);
                return pass || 'Please enter a name';
            }
        },
        {
            type: 'input',
            name: 'intID',
            message: "Intern's employee ID: ",
            validate: function (value) {
                let pass = !isNaN(parseInt(value));
                return pass || 'Please enter a number';
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "Intern's email: ",
            validate: function (value) {
                let pass = value.match(/^[\w-]+@[\w-]+\.[\w-]+$/);
                return pass || 'Please enter a valid email';
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "Intern's school: ",
            validate: function(value) {
                let pass = (value.length > 1);
                return pass || 'Please enter a school';
            }
        }
    ])
    .then(answers => {
        // manager = new Employee(answers.mgrName, parseInt(answers.mgrID), answers.mgrEmail);
        console.log(answers);
        showMenu();
    })
    .catch(error => {
        console.log(error);
        });
}

const renderHTML = () => {
    console.log('Rendering HTML...');
}

// Actual index.js
getManager();

