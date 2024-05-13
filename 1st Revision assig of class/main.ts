
// Q#1:

// Miles-to-Kilometers Converter (Operators):
// • Create a variable named miles and assign a numeric value representing
// distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion 
//factor (1 mile = 1.60934 kilometers). You can achieve this by multiplying
// miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles

let miles = 130;
let kilometers = miles * 1.60934;
console.log(`The distance of ${kilometers.toFixed(4)} kms is equal to ${miles} mile.`);

//---------------------------------------------------------------------------------------------------------------

// Q#2:

//Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.



await inquirer.prompt({
    name: "firstNum",
    type: "input",
    message: "Enter first number:"
  })

let user:any = ("Enter a number:");

let userNumber = parseFloat(user);

let dynamicNumber = 42;

if (userNumber > dynamicNumber) {
    console.log("The entered number is greater than the dynamic number value.");
} else if (userNumber < dynamicNumber) {
    console.log("The entered number is less than the dynamic number value.");
} else {
    console.log("The entered number is equal to the dynamic number value.");
}

//------------------------------------------------------------------------------------------------------------

// Q#3:

//.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.

import inquirer from "inquirer";

let {firstName} = await inquirer.prompt({
    name: "firstName",
           type: "input",
           message: "Enter first name:"
         })

// Use a switch statement to check if the entered name is a known friend.
switch (firstName) {
    case "Yousra":
        console.log("Yousra is a known friend. Hi Yousra!");
        break;
    case "Hassan":
        console.log("Hassan is a known friend. Hi Hassan!");
        break;
    case "Abeera":
        console.log("Abeera is a known friend. Hi Abeera!");
        break;
    case "Haider":
        console.log("Haider is a known friend. Hi Haider!");
        break;
    default:
        console.log("Sorry, I don't recognize that name.")}

//---------------------------------------------------------------------------------------------------------------------------------------------

// Q#4:

//Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Create a second call to the function with two more numbers as arguments
// Define a function that takes two numbers as arguments and returns their sum.

function addNumbers(a: number, b: number) : number {
    return a + b;
}

let num1 = 5;
let num2 = 7;

console.log(`The sum of ${num1} and ${num2} is: ${addNumbers(num1, num2)}`);

let num3 = 10;
let num4 = 3;

console.log(`The sum of ${num3} and ${num4} is: ${addNumbers(num3, num4)}`);


function addNumber(num1: number, num2: number) : number {
    throw new Error("Function not implemented.");
}
//--------------------------------------------------------------------------------------------------------------------------------------------

// Q#5: 

//Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.


function calculate(num1: number, num2: number, operator: string) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            return "Invalid operator";
    }
}

let operand1 = 10;
let operand2 = 5;

let operation = '+';

console.log(`${operand1} ${operation} ${operand2} = ${calculate(operand1, operand2, operation)}`);

operation = '-';
console.log(`${operand1} ${operation} ${operand2} = ${calculate(operand1, operand2, operation)}`);

//--------------------------------------------------------------------------------------------------------------------------

// Q#6:

// Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration

let printArgument = function(arg: string) {
    console.log(arg);
};

printArgument("Hello, panda!"); // This will output "Hello, world!" to the console.

function printArgument2(arg: string) {
    console.log(arg);
}

printArgument2("Hello again panda !"); // This will output "Hello again!" to the console.