// This function generates the static HTML and then inputs the temporal literal where each employee temporal literal was pushed.
function HTML(data) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/2fc392b23c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <header class="jumbotron">
        <h1 class="text-center"><i class="fas fa-users"></i> My Team</h1>
    </header>
    <main>
        <div class="row">
${data}
        </div>
    </main>
</body>

</html>`;
}

module.exports = {
    HTML,
};