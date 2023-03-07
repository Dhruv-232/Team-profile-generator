function makeTeam(team) {
    let teamHTML = [];

    teamHTML.push(team
        .filter(e => e.getRole() === "Manager")
        .map(m => createManagerCard(m)))

    teamHTML.push(team
        .filter(e => e.getRole() === "Engineer")
        .map(e => createEngineerCard(e)))

    teamHTML.push(team
        .filter(e => e.getRole() === "Intern")
        .map(e => createInternCard(e)))

    return teamHTML.join("");
}

function createManagerCard(m) {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${m.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${m.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${m.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${m.getEmail()}">${m.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${m.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;

}

function createEngineerCard(e) {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${e.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${e.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${e.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${e.getGithub()}</li>
            </ul>
        </div>
    </div>
        `;
}

function createInternCard(e) {
return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${e.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${e.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${e.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${e.getEmail()}">${e.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${e.getSchool()}</li>
        </ul>
    </div>
</div>
    `;

}

function createHTML(team) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team Roster</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${makeTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

module.exports = createHTML;