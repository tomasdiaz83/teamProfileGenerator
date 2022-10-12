//Creates individual manager card
const generateManagerCard = (manager) => {
    return `
            <section class="card">
                <div class="container">
                    <p>Name: ${manager.getName()}</p>
                    <p>Role: ${manager.getRole()}</p>
                    <p>ID: ${manager.getId()}</p>
                    <p>Email: ${manager.getEmail()}</p>
                    <p>Office: ${manager.getOfficeNumber()}</p>
                </div>
            </section>
`
}

//Creates individual engineer cards
const generateEngineerCard = (engineer) => {
    return `
            <section class="card">
                <div class="container">
                    <p>Name: ${engineer.getName()}</p>
                    <p>Role: ${engineer.getRole()}</p>
                    <p>ID: ${engineer.getId()}</p>
                    <p>Email: ${engineer.getEmail()}</p>
                    <p>GitHub: ${engineer.getGitHub()}</p>
                </div>
            </section>
`
}

//Joins engineer cards into a continuous body of HTML markup
const generateEngineerHTML = (engineers) => {
    let engineerArray = [];

    for (i = 0; i < engineers.length; i++) {
        const engHTML = generateEngineerCard(engineers[i]);
        engineerArray.push(engHTML);
    }

    engineerArray = engineerArray.join('');

    return engineerArray;
}

//Creates individual intern cards
const generateInternCard = (intern) => {
    return `
            <section class="card">
                <div class="container">
                    <p>Name: ${intern.getName()}</p>
                    <p>Role: ${intern.getRole()}</p>
                    <p>ID: ${intern.getId()}</p>
                    <p>Email: ${intern.getEmail()}</p>
                    <p>School: ${intern.getSchool()}</p>
                </div>
            </section>
`
}

//Joins engineer cards into a continuous body of HTML markup
const generateInternHTML = (interns) => {
    let internArray = [];

    for (i = 0; i < interns.length; i++) {
        const intHTML = generateInternCard(interns[i]);
        internArray.push(intHTML);
    }

    internArray = internArray.join('');

    return internArray;
}

//Creates HTML
const HTMLbody = async(manager, engineers, interns) => {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        
        <h1>The Dev Team</h1>
        
        <h2>Manager</h2>

        <section class = "manager">
            ${generateManagerCard(manager)}
        </section>

        <h2>Engineers</h2>

        <section class = "engineers">
            ${generateEngineerHTML(engineers)}
        </section>

        <h2>Interns</h2>

        <section class = "interns">
            ${generateInternHTML(interns)}
        </section>

    </body>

</html>`}

module.exports = HTMLbody;