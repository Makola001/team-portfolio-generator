// import classes
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern =require("./Intern");
const Manager = require("./Manager");

// generate markup
const generateHTML = require ("./generateHTML")

// import packages
const inquirer = require("inquirer")
const jest = require("jest")
const fs = require("fs")

// Prompt user inputs
function start(){
    inquirer.prompt ([
            {
                type:"input",
                message: "Enter manager name",
                name: "name"
            },

            {
                type:"input",
                message: "Enter manager's employee ID?",
                name: "id"
            },

            {
                type:"input",
                message: "Enter manager's email address?",
                name: "email"
            },

            {
                type:"list",
                message: "Add an engineer, intern, or finish building team?",
                name: "teamOption",
                choices: ["Add Engineer", "Add Intern", "Finished"]
            },

    ])};

    start();

   
    //     {
    //         type:"input",
    //         message: "What is your gitHub username?",
    //         name: "gitHub"
    //     },

    //     {
    //         type:"input",
    //         message: "What is school did you attend?",
    //         name: "school"
    //     }

    // // log answers and write file...still need to define/mockup generateHTML
    // .then((answers)=>{
    //     fs.writeFile("index.html",generateHTML(answers),err=>err?console.log(err):"")
    // });


