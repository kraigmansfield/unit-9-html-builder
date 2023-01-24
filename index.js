var http = require('http')
const inquirer = require(`inquirer`)
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is you name?',
      name: 'userName',
    },
    {
      type: 'input',
      message: 'What are you from?',
      name: 'userLoc',
    },
    {
      type: 'input',
      message: 'What is your favorite food?',
      name: 'userFood',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'userLink',
    },
    {
      type: 'input',
      message: 'What is your Github URL?',
      name: 'userGit',
    },
  ])
  .then((response) => {
    fs.writeFile(
      `${response.userName}.html`,
      `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1>My Portfolio</h1>
        </header>
        <main>
            <h2>${response.userName}</h2>
                <p>${response.userLoc}</p>
                <p id="bio">${response.userFood}</p>
                <p>
                    LinkedIn:<a href="${response.userLink}" target="_blank">${response.userLink}</a>
                </p>
                <p>
                    GitHub:<a href="https://github.com/${response.userGit}" target="_blank">${response.userGit}</a>
                </p>
        </main>
    </body>
    </html>`,
      (err) => {
        if (err) {
          throw err
        }
      },
    )
  })
