#!/usr/bin/env node

import inquirer from "inquirer";

const currency:any = {
    USD:1,  //BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};



let userAnswer= await inquirer.prompt([{
    name: "from",
    message: "Enter from currency",
    type:"list",
    choices: ["USD", "EUR", "GBP" , "INR" , "PKR"]

},
{
    name: "to",
    message: "Enter to currency",
    type:"list",
    choices: ["USD", "EUR", "GBP" , "INR" , "PKR"]
},
{
    name:"amount",
    message:"Enter your amount",
    type: "number"
}
    


]);

let fromAmount= currency[userAnswer.from]    // user jo currency select kare wo is me aaigi

let toAmount= currency[userAnswer.to]

let amount= userAnswer.amount

let baseAmount = amount / fromAmount            // base currency

let convertedAmount = Math.round( baseAmount * toAmount );

console.log(convertedAmount);
