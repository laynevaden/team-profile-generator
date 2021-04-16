const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
// require all the Classes

inquirer
  .prompt([
    {
        type: 'input',
        name: 'mgrName',
        message: "Welcome to the Team Profile Generator! Please enter the manager's name: "
      },
      {
        type: 'input',
        name: 'mgrID',
        message: "Manager's employee ID: "
      },
      {
        type: 'input',
        name: 'mgrEmail',
        message: "Manager's email: "
      },
      {
        type: 'input',
        name: 'mgrPhone',
        message: "Manager's office phone: "
      }
  ])
  .then(answers => {
    manager = new Employee(answers.mgrName, parseInt(answers.mgrID), answers.mgrEmail);
    console.log(manager);
  })
  .catch(error => {
    if(error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });

// Loop
    // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    // WHEN I select the engineer option
    // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
    // WHEN I select the intern option
    // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu



// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

