#!/usr/bin/env node
import inquirer from "inquirer"

let myCurrentBalance = 10000
let myPinCode = 1234
 console.log("Welcome to ATM");
let userAnswer = await inquirer.prompt([
    {
        message: "Enter Your Pin?", type: "number", name: "answer"
    }
])


if (userAnswer.answer === myPinCode) {
    console.log("You Entered Correct");

    let user_operation_Answer = await inquirer.prompt([
        {
            message: "Select Options", type: "list", name: "operation",
            choices: ["withdraw", "fast cash", "check balance"]
        }])


    if (user_operation_Answer.operation === "withdraw") {
        let user_enterAmount_by_itself = await inquirer.prompt([
            { message: "Enter Amount", type: "number", name: "enteramount" }

        ])
        if (user_enterAmount_by_itself.enteramount > myCurrentBalance) {
            console.log("Insufficient Balance");
        }
        else if(user_enterAmount_by_itself.enteramount<500){
            console.log("Sorry,You Can withdraw minimum 500")}
        else {
           console.log (`Your Remaining Balance ${myCurrentBalance-user_enterAmount_by_itself.enteramount}`);
            
        }
        }

    if (user_operation_Answer.operation === "fast cash") {
            let user_selectedAmount = await inquirer.prompt([
                {
                    message: "Select Amount", type: "list", name: "selectamount",
                    choices: ["1000", "2000", "5000", "10000"]
                },
            ])
            if (user_selectedAmount.selectamount === "1000") { console.log(myCurrentBalance - user_selectedAmount.selectamount); }
            else if (user_selectedAmount.selectamount === "2000") { console.log(`Your Remaining Balance ${myCurrentBalance-user_selectedAmount.selectamount}`); }
            else if (user_selectedAmount.selectamount === "5000") { console.log(`Your Remaining Balance ${myCurrentBalance-user_selectedAmount.selectamount}`); }
            else if (user_selectedAmount.selectamount === "10000") { console.log(`Your Remaining Balance ${myCurrentBalance-user_selectedAmount.selectamount}`); }

        }

    else if(user_operation_Answer.operation==="check balance"){
        console.log(myCurrentBalance)}

    }


else { console.log("You Entered Incorrect Code") }