import chalk from "chalk";
import inquirer from "inquirer";
// type declaration
let counter;
// value initialization
counter = await inquirer.prompt([
    { name: "sentence", type: "input", message: 'Enter Words to Calculate' }
]);
//removing whitespace
let input = counter.sentence.trim().split(" ");
// console.log(input)
// output
console.log(chalk.magenta(` You input  ${chalk.bold.bgYellow(input.length)} word(s). `));
