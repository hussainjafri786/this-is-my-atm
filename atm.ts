#!/usr/bin/snv mode

import inquirer from "inquirer";
let myBalance: any = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    message: "Enter You Pin Code:",
    type: "number",
    name: "pin",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin Code.");

let operationAns = await inquirer.prompt(
  [
    {
    name: "operation",
    message: "What you wanna do?",
    type: "list",
    choices: ["Withdraw","Deposite Amount", "Check Balance"],
    },
  ]
);

if (operationAns.operation === "Withdraw") {
  let amountAns = await inquirer.prompt(
      [
        {
          name: "amount",
        message: "Enter You Amount:",
        type: "number",
        },
    ]
  );
  myBalance -= amountAns.amount;
  console.log("Done.");
  console.log("Your Remaining Balance is: " + myBalance)
}
else if (operationAns.operation === "Check Balance") {
    console.log(`Your Balance is: ${myBalance}`)
}
else if (operationAns.operation === "Deposite Amount") {
    let depositeAns = await inquirer.prompt([
        {
            message: "Enter the amount You Want to Deposite:",
            name: "despoiste",
            type: "number",
        }
    ]);
    myBalance += depositeAns.despoiste;
    console.log("Cash Deposited Successfully.")
    console.log(`Your Updated Balance is: ${myBalance}`)
 }
}
else {
    console.log("Incorrect Pin.")
}