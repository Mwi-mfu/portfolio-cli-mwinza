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
    rl.on('line', (input) => {
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

function show_About(){

}


function show_SkillsToLearn() {

}


function show_Projects() {

}


function show_FuturePlans() {

}

function exit() {
  active = false;
}


main();