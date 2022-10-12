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

const generateEngineerHTML = (engineers) => {
    let engineerArray = [];

    for (i = 0; i < engineers.length; i++) {
        const engHTML = generateEngineerCard(engineers[i]);
        engineerArray.push(engHTML);
    }

    engineerArray.join('');

    return engineerArray;
}

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

const generateInternHTML = (interns) => {
    let internArray = [];

    for (i = 0; i < interns.length; i++) {
        const intHTML = generateInternCard(interns[i]);
        internArray.push(intHTML);
    }

    internArray.join('');

    return internArray;
}

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
        
        <section class = "manager">
            ${generateManagerCard(manager)}
        </section>

        <section class = "engineers">
            ${generateEngineerHTML(engineers)}
        </section>

        <section class = "interns">
            ${generateInternHTML(interns)}
        </section>

    </body>
    
</html>`}

module.exports = HTMLbody;