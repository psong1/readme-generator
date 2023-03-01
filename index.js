// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// questions array that will respond to user input using node.js and inquirer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe the project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How will users install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will users interact with the project?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who contributed to the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users test the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license was used for the project?',
        choices: ['mit', 'apache', 'gpl', 'afl', 'cc'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// function to generate the README file
const writeToFile = (fileName, data) => {
    fs.writeFile(`${fileName}`, data, (err) => 
    err ? console.log(err) : console.log('File was successfully created')
    );
};

// function that initializes application and then calling the function
const init = () => {
    return inquirer.prompt(questions)
};

init()
.then(answers => generateMarkdown(answers))
.then(generatedReadMe => writeToFile('README.md', generatedReadMe))
.catch(err => {
    console.log(err);
})
