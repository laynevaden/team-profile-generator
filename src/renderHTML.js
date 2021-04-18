const fs = require('fs');

function renderHTML(employees) {

    let HTML = `
            <!doctype html>
            <html lang="en">
                <head>
                    <!-- Required meta tags -->
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <!-- Bootstrap CSS -->
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
                    <!-- Font Awesome -->
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
                        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
                    <title>Team Profile</title>
                </head>
                <body class="bg-dark text-light">
                    <header class="my-3 text-center container">
                        <div class="row">
                            <div class="col-8 mx-auto">
                            <h1 class="display-2">Meet the Team</h1>
                            <hr/>
                            </div>
                        </div>
                    </header>
                    <main>
                        <div class="container">
                            <div class="row">
                                <div class="card text-dark bg-light col-3 m-3">
                                    <div class="card-header text-dark bg-success"> <h5> ${employees[0].name} </h5></div>                       
                                    <div class="card-body">
                                        <i class="fas fa-user-tie fa-3x"></i>
                                        <p>ID: ${employees[0].id}</p>
                                        <p>Email: <a href="mailto: ${employees[0].email}">${employees[0].email}</a></p>
                                        <p>Phone: ${employees[0].phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">`;

    // loop through employees
    // add block of HTML for each one with role = Engineer 
    for (const employee of employees) {
        if (employee.getRole() === 'Engineer') {
            HTML +=             `<div class="card text-dark bg-light col-3 m-3">
                                    <div class="card-header text-dark bg-info">
                                        <h5>${employee.name}</h5> 
                                    </div>                       
                                    <div class="card-body my-1 py-2">
                                        <i class="fas fa-user-alt fa-3x"></i>
                                        <p>ID: ${employee.id}</p>
                                        <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                                        <p>GitHub: <a href='https://www.github.com/${employee.username}'>${employee.username}</a></p>
                                    </div>
                                </div>`
            }
        }
                                
    HTML += `</div><div class="row">`;

    // loop through employees
    // add block of HTML for each one with role = Intern 
    for (const employee of employees) {
        if (employee.getRole() === 'Intern') {
            HTML +=             `<div class="card text-dark bg-light col-3 m-3">
                                    <div class="card-header text-dark bg-primary">
                                        <h5>${employee.name}</h5> 
                                    </div>                       
                                    <div class="card-body my-1 py-2">
                                        <i class="fas fa-user-graduate fa-3x"></i>
                                        <p>ID: ${employee.id}</p>
                                        <p>Email: <a href="mailto: ${employee.email}">${employee.email}</a></p>
                                        <p>School: ${employee.school}</p>
                                    </div>
                                </div>`
            }
        }


    HTML += `</div></div></main></body></html>`;

    // Write HTML to a file
    const filepath = `./dist/output.html`;

    fs.writeFile(filepath, HTML, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

module.exports = renderHTML;