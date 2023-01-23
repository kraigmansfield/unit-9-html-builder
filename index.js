var http = require('http')
const inquirer = require(`inquirer`);
const fs = require('fs');

const generateHtml = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`


inquirer.prompt([
    {
        type: "input",
        message: "What is you name?",
        name: "userName",
    },
    {
        type: "input",
        message: "What are you from?",
        name: "userLoc",
    },
    {
        type: "input",
        message: "What is your favorite food?",
        name: "userFood",
    },
    {
        type: "input",
        message: "What is your LinkedIn URL?",
        name: "userLink",
    },
    {
        type: "input",
        message: "What is your Github URL?",
        name: "userGit",
    },
]).then (answers => {
    fs.writeFile(`${answers.userName}.html`,generateHtml.toString(),(err)=> {
        if(err){
            throw err
    }
})
    
})






