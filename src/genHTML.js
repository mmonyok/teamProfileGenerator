function HTML(data) {
    console.log("HTML function is running.");
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <header class="jumbotron">
        <h1>My Team</h1>
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