const generateHTML = (answers) =>{
    return `
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Portfolio</title>
        </head>

        <body>
            <h2>My Team</h2>

            <div class="flex-container" id="team">
                <div class="column">
                    <div class="card">
                        <h2>`${this.name}`</h2>
                        <h3>`${this.id}`</h3>
                        <h3>`${this.role}`</h3>
                        <a href=`${this.email}` target="_blank">Email</a>
                        <a href=`${this.gitHub}` target="_blank">GitHub</a>
                    </div>
                </div>
            </div>

        </body>

        </html> `
}