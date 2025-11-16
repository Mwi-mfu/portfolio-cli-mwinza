import { createInterface } from 'node:readline/promises';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});


async function main() {
  let active = true;
  while (active) {
    menu();
    let option;
    await rl.question('PICK AN OPTION:', (input) => {
      option = input;
      console.log(option)
      rl.close();
    });


    switch (option) {
      case "1":
        show_AboutMe();
        break;
      case "2":
        show_SkillsToLearn();
        break;
      case "3":
        show_Projects();
        break;
      case "4":
        show_FuturePlans();
        break;
      case "5":
        exit();
        break;
      default:
        console.log("ENTER A VALID OPTION \n");
        main();
    }
  };
}


function menu() {
  console.log("==============================");
  console.log("       MY PORTFOLIO APP");
  console.log("==============================");


  const options = [
    "About me", 
    "Skills I want to learn", 
    "My projects", 
    "My future plans", 
    "Exit \n"
  ];
   
  printLoop(options);
}

function show_AboutMe(){
  console.log("ABOUT ME")
  console.log("My name is Mwinza Mufune. I'm a tech enthusiast who is interested in various fields of tech. My main interests are backend development, networking and operating systems. I'm eager to learn and willing to take on various challenges to achieve my goals.");
}


function show_SkillsToLearn() {
  const skills = [
    'Computer networking',
    'Low level programming',
    'Automation and Scripting',
    'Database management'
  ]

  console.log("The skills I wish to learn are:")
  printLoop(skills);
}


function show_Projects() {
  const projects = [
    'Notes API',
    'Todo List API',
    'Utilities for arch linux'
  ]

  console.log("The projects I have done:")
  printLoop(projects);
}


function show_FuturePlans() {
  const plans = [
    'Master Express framework',
    'Build backends',
    'Create a linux distribution',
    'Cooperating with notable actors in the industry'
  ]

  console.log("Plans for the future:")
  printLoop(plans);
}

function exit() {
  active = false;
}


async function consoleInput() {
  await rl.quest("What is your option", (input) => {
    console.log(input);
    rl.close()
  });
} 

// Loops through arrays of Items
function printLoop (arr) {
  let index = 1;
  for (let element of arr) {
    console.log(`${index}. ${element}`);
    index = index + 1;
  }
}

main();