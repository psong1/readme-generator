// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(`${fileName}`, data, (err) => 
    err ? console.log(err) : console.log('File was successfully created')
    );
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
};

// Function call to initialize app
init()
.then(answers => generateMarkdown(answers))
.then(generatedReadMe => writeToFile('README.md', generatedReadMe))
.catch(err => {
    console.log(err);
})
