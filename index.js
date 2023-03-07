const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist")
const distPath = path.join(DIST_DIR, "team.html");
const createHTML = require("./src/generateHTML.js");

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

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your name (engineer)?',
        name: 'engineer_name'
    },
    {
        type: 'input',
        message: 'What is your engineer ID?',
        name: 'engineer_id'
    },
    {
        type: 'input',
        message: 'What is your engineer email?',
        name: 'engineer_email'
    },
    {
        type: 'input',
        message: 'What is your engineer github?',
        name: 'github'
    },

];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your name (intern)?',
        name: 'intern_name'
    },
    {
        type: 'input',
        message: 'What is your intern ID?',
        name: 'intern_id'
    },
    {
        type: 'input',
        message: 'What is your intern email?',
        name: 'intern_email'
    },
    {
        type: 'input',
        message: 'What is your intern school?',
        name: 'school'
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
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "Who would you like to add?",
            choices: ["Engineer", "Intern", "done adding, create page"]
        }
    ]).then(resp => {
        switch (resp.selection) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            default:
                createTeam();
                break;

        }
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then(function (data) {
        console.log("data =", data)
        let e1 = new Engineer(data.engineer_name, data.engineer_id, data.engineer_email, data.github);
        team.push(e1);
        addMembers();
    });
}

function addIntern() {
    inquirer.prompt(internQuestions).then(function (data) {
        console.log("data =", data)
        let i1 = new Intern(data.intern_name, data.intern_id, data.intern_email, data.school);
        team.push(i1);
        addMembers();
    });
}

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, "utf-8");
}

function createTeam() {
    if (!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)
    }
    
        
        writeToFile(distPath, createHTML(team))
    
}

buildManager();