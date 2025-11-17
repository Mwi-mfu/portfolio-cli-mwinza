import readline from "node:readline/promises";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let active = true;

async function main() {
  while (active) {
    menu();
    const answer = await rl.question("PICK AN OPTION: ");
    
    switch (answer) {
      case "1":
        console.clear();
        show_AboutMe();
        break;
      case "2":
        console.clear();
        show_SkillsToLearn();
        break;
      case "3":
        console.clear();
        show_Projects();
        break;
      case "4":
        console.clear();
        show_FuturePlans();
        break;
      case "5":
        console.clear();
        exit();
        break;
      default:
        console.clear();
        console.log("ENTER A VALID OPTION \n");
        break;
    };
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
  console.log("My name is Mwinza Mufune. I'm a tech enthusiast who is interested in various fields of tech. \nMy main interests are backend development, networking and operating systems. I'm eager to learn and willing to take on various challenges to achieve my goals. \n\n");
}


function show_SkillsToLearn() {
  const skills = [
    'Computer networking',
    'Low level programming',
    'Automation and Scripting',
    'Database management \n\n'
  ]

  console.log("The skills I wish to learn are:")
  printLoop(skills);
}


function show_Projects() {
  const projects = [
    'Notes API',
    'Todo List API',
    'Utilities for arch linux \n\n'
  ]

  console.log("The projects I have done:")
  printLoop(projects);
}


function show_FuturePlans() {
  const plans = [
    'Master Express framework',
    'Build backends',
    'Create a linux distribution',
    'Cooperating with notable actors in the industry\n\n'
  ]

  console.log("Plans for the future:")
  printLoop(plans);
}

function exit() {
  console.log("CLOSING");
  active = false;
  rl.close();
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