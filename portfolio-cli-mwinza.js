import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let active = true;

function main() {
  while (active) {
    menu();
    let option;
    rl.question('PICK AN OPTION:', async (input) => {
      await input;
      option = input;
      rl.close();
    });
  };
}


function menu() {
   console.log("==============================");
   console.log("       MY PORTFOLIO APP");
   console.log("==============================");
   console.log("1. About Me");
   console.log("2. Skills I want to learn");
   console.log("3. My projects");
   console.log("4. My future plans");
   console.log("5. Exit \n");
   console.log("PICK AN OPTION: ");
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
  let index = 1;

  console.log("The skills I wish to learn are:")
  for (let skill of skills) {
    console.log(`${index}. ${skill}`);
    index = index + 1;
  }
}


function show_Projects() {
  const projects = [
    'Notes API',
    'Todo List API',
    'Utilities for arch linux'
  ]
  let index = 1;

  console.log("The projects I have done:")
  for (let project of projects) {
    console.log(`${index}. ${project}`);
    index = index + 1;
  }
}


function show_FuturePlans() {

}

function exit() {
  active = false;
}


async function consoleInput() {
  rl.question("What is your option", (input) => {
    console.log(input);
    rl.close()
  });
} 

show_Projects();