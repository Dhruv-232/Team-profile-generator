const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist")
const distPath = path.join(DIST_DIR, "team.html");
const createHTML = require("./src/page-template.js");

let team = [];
const managerQuestions = [
    {
        type: 'input',
        message: 'What is your name (manager)?',
        name: 'manager_name'
    },
    {
        type: 'input',
        message: 'What is your manager ID?',
        name: 'manager_id'
    },
    {
        type: 'input',
        message: 'What is your manager email?',
        name: 'manager_email'
    },
    {
        type: 'input',
        message: 'What is your manager office number?',
        name: 'office_number'
    },

];

function buildManager() {
    inquirer.prompt(managerQuestions).then(function (data) {
        console.log("data =", data)
        let m1 = new Manager(data.manager_name, data.manager_id, data.manager_email, data.office_number);
        team.push(m1);
        addMembers();
    });    
}

function addMembers() {
    // Tobe completed
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log("data =", data)
        var fileName = 'generatedREADME.md';
        writeToFile(fileName, generateMd({...data}))
    });
}