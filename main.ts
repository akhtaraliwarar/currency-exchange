// inquirer install ===== npm i inquirer
// dependancess inquirer ====== npm i --save-dev @types/inquirer

// CUEENCY CHANGER PROJECT

import { log } from 'console';
// import inquirer from 'inquirer';

// const currencyConversion = { 
// "PKR":{
//     "PKR":1,
//     "USD":0.0036,
//     "GBP":0.0028,
    
// },
// "GBP":{
//     "GBP":1,
//     "USD":1.26,
//     "PKR":350.76,
// },
//  "USD":{
//     "USD":1,
//     "GBP":0.79,
//     "PKR":277.54,

// },
// };
 
// // prompt user for input 

// const answer :{
// from: "PKR" | "GBP" | "USD",
// to: "PKR" | "GBP" | "USD",
// amount: number,

// }= await inquirer.prompt([{
//  type : "list",
//  name : "from",
// message : "which currency you select",
// choices : ["PKR","GBP" ,"USD"],

// },
// {
//     type:"list",
//     name : "to",
//     message : "select you currancy rate",
//     choices :["USD","GBP" ,"PKR"],
// },
// {
//     type : "number",
//     name : "amount",
//     message :"entert a  amount you wish to converte ",
    
// },
// ]);

// //destructuring user input

// const {from,to ,amount} = answer;

// // performance currency conversion

// if(from && to && amount){
// const result = currencyConversion[from][to]* amount;

// console.log(`your conversion from ${from} to ${to} is ${result}`);
// }else {
//     console.log("invalid conversion" );
    
// }
 // 
 import inquirer from "inquirer"
import Choices from 'inquirer/lib/objects/choices.js';
import chalk from "chalk"
 const calculater :{
num2:number
num1:number
opreator: string

 }= await inquirer.prompt([
 {
  type :"number" ,
  name: "num1",
  message :"type a first number here",
 },
    {
 type:"number",
 name :"num2",
 message: "type a 2nd number here",

  },
  {
 type:"list",
 name: "opreator",
 message:"choose opreator",
 choices:["+", "-" ,"*" ,"/"],
  },
]);

const {num1, num2,opreator} = calculater;


 let result
switch (opreator) {
  case "+": result = num1 + num2
  case "-": result = num1 - num2
    break;
    case "*": result = num1 * num2
    break;
    case "/": result = num1 / num2
    break;
 
  default:
    
    console.log("invalid result");
    
}
//console.log(`you output is here ${num1} ${opreator} ${num2} = ${result}`);
console.log(chalk.bold.white(),num1,opreator,num2,"=",result);
